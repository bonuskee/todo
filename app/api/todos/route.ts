
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const todos = await prisma.todo.findMany({
            orderBy: {
                text: "asc",
            }
        });

        return NextResponse.json(todos); 
    }catch (error) {
        return NextResponse.json(
            { error: "failed to fetch todos" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const { text, imageUrl } = await request.json();
        const todo = await prisma.todo.create({
            data: {
                text,
                imageUrl,
                completed: false,
            },
        });
        return NextResponse.json(todo);
    }catch (error) {
        return NextResponse.json(
            {error: "Failed to create todo"},
            { status: 500 }
        );
    }
}

