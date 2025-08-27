# Request Header Parser Microservice

A simple Node.js microservice that parses HTTP request headers and returns client information in JSON format. Built as part of the freeCodeCamp Back End Development and APIs curriculum.

## 🚀 Live Demo

[View Live Application](https://your-app-url.glitch.me)

## 📋 Features

- Extracts client IP address from request headers
- Identifies preferred language from Accept-Language header
- Returns user agent (software) information
- Cross-origin resource sharing (CORS) enabled
- Works with various proxy configurations

## 🛠️ API Endpoint

### GET `/api/whoami`

Returns a JSON object with the following client information:

```json
{
  "ipaddress": "127.0.0.1",
  "language": "en-US",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
}
```

#### Response Fields:
- **ipaddress**: Client's IP address (supports IPv4/IPv6 and proxy forwarding)
- **language**: Primary language preference from Accept-Language header
- **software**: Complete User-Agent string

## 💻 Installation & Setup

### Prerequisites
- Node.js (v12 or higher)
- npm

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/request-header-parser.git
   cd request-header-parser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (optional):
   ```
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` in your browser

## 📦 Dependencies

- **express**: Web framework for Node.js
- **cors**: Enable Cross-Origin Resource Sharing
- **dotenv**: Load environment variables from .env file

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  }
}
```

## 🏗️ Project Structure

```
request-header-parser/
│
├── public/           # Static files
├── views/           # HTML templates
│   └── index.html   # Main page
├── index.js         # Main application file
├── package.json     # Project configuration
├── .env            # Environment variables (optional)
└── README.md       # Project documentation
```

## 🔧 How It Works

The microservice analyzes incoming HTTP requests and extracts three key pieces of information:

1. **IP Address Detection**: 
   - Checks `X-Forwarded-For` header (for proxy/load balancer setups)
   - Falls back to connection remote address
   - Handles IPv6 to IPv4 conversion

2. **Language Parsing**:
   - Parses the `Accept-Language` header
   - Extracts the primary language preference
   - Removes quality values (e.g., `en-US;q=0.9` becomes `en-US`)

3. **User Agent Extraction**:
   - Returns the complete `User-Agent` string
   - Contains browser, OS, and device information

## 🌐 Deployment

### Glitch
1. Go to [Glitch.com](https://glitch.com)
2. Click "New Project" > "Import from GitHub"
3. Enter your repository URL
4. Your app will be live at `https://your-project-name.glitch.me`

### Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Deploy: `git push heroku main`

### Railway
1. Connect your GitHub repository
2. Deploy automatically on push

## 🧪 Testing

### Manual Testing
Visit `/api/whoami` endpoint in your browser or use curl:

```bash
curl https://your-app-url.com/api/whoami
```

### freeCodeCamp Tests
This project is designed to pass the freeCodeCamp "Request Header Parser Microservice" tests:

1. ✅ Provide your own project URL
2. ✅ Return JSON with `ipaddress` key containing your IP
3. ✅ Return JSON with `language` key containing preferred language
4. ✅ Return JSON with `software` key containing user agent string

## 🔍 Troubleshooting

### Common Issues:

**Tests failing?**
- Ensure your app URL is accessible publicly
- Check that the `/api/whoami` endpoint returns valid JSON
- Verify CORS is properly configured
- Make sure no caching is interfering with tests

**IP address showing as localhost?**
- Add `app.set('trust proxy', 1)` to handle proxy forwarding
- Ensure your hosting platform supports proxy headers

**Language parsing errors?**
- The code handles missing Accept-Language headers gracefully
- Quality values are automatically stripped from language preferences

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/request-header-parser/issues).

## 📚 Learn More

- [freeCodeCamp Back End Development](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [Express.js Documentation](https://expressjs.com/)
- [HTTP Headers MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

*Built with ❤️ as part of the freeCodeCamp curriculum*
