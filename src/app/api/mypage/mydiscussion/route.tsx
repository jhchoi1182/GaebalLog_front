import { NextResponse } from "next/server";

export const GET = async () => {
  const discussions: discussions = [
    {
      chatListId: 1,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: true,
    },
    {
      chatListId: 2,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: false,
    },
    {
      chatListId: 3,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: true,
    },
    {
      chatListId: 4,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: true,
    },
    {
      chatListId: 5,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: false,
    },
    {
      chatListId: 6,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: true,
    },
    {
      chatListId: 7,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: true,
    },
    {
      chatListId: 8,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: false,
    },
    {
      chatListId: 9,
      nickname: "나나",
      title: "제목1",
      categories: ["카테고리1", "카테고리2"],
      createdAt: "2023-08-28 17:08:22",
      remainingTime: 1,
      isparticipated: true,
    },
  ];
  return NextResponse.json({ discussions });
};
