import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestJson = await request.json();
  const { action } = requestJson;
  /**
   * 根据不同的 type 确定是新增，查询还是修改
   * query
   * add
   */
  // 查询
  if (action === "query") {
    const { email, password } = requestJson;
    // 是否登录
    const registerCnt = await prisma.user.count({
      where: {
        email: email,
      },
    });
    if (registerCnt === 0) {
      return NextResponse.json({ message: "do not register" }, { status: 401 });
    }
    // 是否密码是对的
    const cnt = await prisma.user.count({
      where: {
        email: email,
        password: password,
      },
    });
    if (cnt === 0) {
      return NextResponse.json(
        { message: "password and email not correct" },
        { status: 401 },
      );
    }

    const user = await prisma.user.findFirst({
      select: {
        email: true,
        id: true,
        name: true,
        password: false,
      },
      where: {
        email: email,
      },
    });
    return NextResponse.json({ message: "success", data: user });
  } else if (action === "add") {
    // 新增
    const { email, password } = requestJson;
    const emailCnt = await prisma.user.count({
      where: {
        email,
      },
    });
    if (emailCnt > 0) {
      return NextResponse.json(
        { message: "email already exist" },
        { status: 409 },
      );
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    return NextResponse.json(
      { message: "sucessfully create" },
      { status: 200 },
    );
  } else if (action === "update") {
    const { name, password, email } = requestJson;
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
        password,
      },
    });
    return NextResponse.json(
      { message: "sucessfully update", data: user },
      { status: 200 },
    );
  }

  try {
    return NextResponse.json(
      { message: "failure please specify action type" },
      { status: 400 },
    );
  } catch (error) {
    return Response.json({ error });
  }
}
