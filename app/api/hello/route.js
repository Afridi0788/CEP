if (!globalThis._tempData) {
  globalThis._tempData = {
    users: [],
    quizResults: [],
    visitors: 0,
  };
}

const { users, quizResults } = globalThis._tempData;

// ✅ Handle GET requests
export async function GET(req) {
  globalThis._tempData.visitors++;
  return Response.json({
    message: "Temporary backend active ✅",
    totalUsers: users.length,
    totalQuizAttempts: quizResults.length,
    totalVisitors: globalThis._tempData.visitors,
  });
}

// ✅ Handle POST requests
export async function POST(req) {
  try {
    const { type, name, email, password, answers, result } = await req.json();

    // Register user
    if (type === "register") {
      if (users.find((u) => u.email === email)) {
        return Response.json({ error: "Email already exists!" }, { status: 400 });
      }
      users.push({ name, email, password });
      return Response.json({
        message: "User registered successfully!",
        userCount: users.length,
      });
    }

    // Login user
    if (type === "login") {
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        return Response.json({ error: "Invalid email or password" }, { status: 401 });
      }
      return Response.json({ message: "Login successful!", name: user.name });
    }

    // Store quiz result
    if (type === "quiz") {
      quizResults.push({ email, answers, result });
      return Response.json({
        message: "Quiz result saved!",
        totalQuizAttempts: quizResults.length,
      });
    }

    // Invalid request
    return Response.json({ error: "Invalid request type" }, { status: 400 });
  } catch (err) {
    return Response.json({ error: "Server error", details: err.message }, { status: 500 });
  }
}
