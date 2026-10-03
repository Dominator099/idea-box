# Idea Box

Classmates write a sticky note and drag it into a ballot box. Only you can read the notes, at `/admin.html`, behind a passcode checked on the server.

## Deploy on Vercel
1. Put this folder in a GitHub repo and import it at vercel.com/new (or run `npx vercel` in this folder).
2. In the project, open **Storage**, add **Upstash Redis** (free plan is fine) and connect it to the project. This adds the database keys for you.
3. In **Settings > Environment Variables**, add `ADMIN_PASSCODE` with the passcode you want.
4. Redeploy. Share the main link with your class. Open `/admin.html` yourself and enter the passcode.

Notes are saved with only their text, colour and time. Change the passcode any time by editing the variable and redeploying.
