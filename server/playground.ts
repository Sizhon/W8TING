import supabase from "./utils/supabase";

const test = async () => {
  const { data, error } = await supabase.from("users").select("*");
  console.log(data);
    const tableSizeRes = await supabase
        .from("Onboarding").select("*", {count: "exact"});
    console.log(tableSizeRes.count);

    const now = new Date();
    now.setHours(now.getHours() + 24);
    const expires_at = now.toISOString();
    const insertRes = await supabase
        .from('Onboarding')
        .insert([
          {
            expires_at: expires_at,
            assigned_number: tableSizeRes.count! + 1,
            name: "Simon Zhu",
            status: "WAITING",
          },
        ])
        .select()
    console.log(insertRes.data);
    if (insertRes.data === null) {
      console.log(insertRes.error);
    }
}

test();
