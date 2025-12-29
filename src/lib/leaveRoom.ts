import { supabase } from "@/lib/supabase";

export async function leaveRoom(userId: string) {
  await supabase.rpc("leave_room", {
    p_user_id: userId,
  });
}
