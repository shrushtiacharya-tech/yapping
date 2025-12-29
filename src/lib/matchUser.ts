// src/lib/matchUser.ts
import { supabase } from "./supabase";

export async function matchUser(userId: string) {
  // Look for a user in the queue who is waiting and is not yourself
  const { data: waitingUser } = await supabase
    .from("match_queue")
    .select("*")
    .eq("status", "waiting")
    .neq("user_id", userId)
    .limit(1)
    .single();

  if (waitingUser) {
    // Mark both users as matched
    await supabase
      .from("match_queue")
      .update({ status: "matched" })
      .in("user_id", [userId, waitingUser.user_id]);
    return waitingUser.room_id; // return the room ID
  }

  // If nobody is waiting, create your own entry in the queue
  const roomId = crypto.randomUUID();
  await supabase.from("match_queue").insert({
    user_id: userId,
    status: "waiting",
    room_id: roomId,
  });

  return roomId; // you will wait until another user connects
}
