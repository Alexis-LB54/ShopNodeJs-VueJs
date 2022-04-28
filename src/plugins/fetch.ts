import { useListeCourse } from "@/stores/list";

export async function fetchConsults() {
  const ListCourse = useListeCourse();

  let response = await fetch("http://127.0.0.1:96/articles", {
  })
    .then((response) => response.json())
    .catch((e) => {
      console.warn("error", e);
    });
  console.log(response, "coucou 2");

  ListCourse.list = response.articles;

  return response;
}