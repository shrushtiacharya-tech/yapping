import { supabase } from "@/lib/supabase";

export async function sendMessage(
  roomId: string,
  senderId: string,
  text: string
) {
  await supabase.from("messages").insert({
    room_id: roomId,
    sender: senderId,
    text,
  });
}
