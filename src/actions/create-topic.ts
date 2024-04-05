"use server";

export async function createTopic(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");
  // TODO: revalidate the homepage
  console.log(name, description);
}
