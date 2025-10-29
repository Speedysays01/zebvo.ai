export async function GET() {
  return Response.json({
    images: [
      "https://images.unsplash.com/photo-1602872029427-9b3ef2b1c7a8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1552410260-0fd9b39b4e8e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
    ],
  });
}
