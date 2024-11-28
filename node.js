const BOT_TOKEN = "YOUR_BOT_TOKEN"; // ضع التوكين الخاص بك هنا
const TELEGRAM_API_URL = `https://api.telegram.org/bot${"7237826486:AAESq0i5JXI0655qA1kxiUTCoymdLjoR1dw"}/getUpdates`;

async function getChatId() {
  try {
    const response = await fetch(TELEGRAM_API_URL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // التحقق إذا كان هناك رسائل في التحديثات
    if (data.result.length === 0) {
      console.log("No updates found. Send a message to the bot first.");
      return;
    }

    // استخراج Chat ID من أول رسالة
    const chatId = data.result[0].message.chat.id;
    console.log("Chat ID:", chatId);
  } catch (error) {
    console.error("Error fetching chat ID:", error);
  }
}

// استدعاء الدالة للحصول على Chat ID
getChatId();
