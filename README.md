# Vibe Dining

Your meal, delegated. Choose from a human restaurant menu and ask a simulated agent to eat on your behalf. An installation about which experiences we hand over to AI.

## Run

Requires Node.js 18 or later. No dependencies, installation, API keys, or real LLM.

```
npm start
```

Open http://localhost:3000. Use `npm run check` for JavaScript syntax validation. Deploy `index.html`, `style.css`, `restaurants.js`, and `app.js` to any static host. Set up the custom domain vibedining.com with your chosen host separately.

## Behavior

- Six printed Italian menu sections: Antipasti, Primi, Secondi, Contorni, Dolci, and Bevande. Removable order chips and editable suggested prompts.
- Enter submits; Shift+Enter adds a line. The send button becomes a stop button while dining.
- Slower, course-by-course eating with fictional thinking, culinary status animation, and streamed tasting notes. Each dish now has an extended, multi-paragraph tasting narrative and deliberate pauses.
- Completed meals drop a thermal-style guest check over the menu, with itemized token prices and suggested 18%, 20%, and 25% tips. Dismiss it with the corner cross. Stop preserves the partial meal without creating a new check; New table clears the session and check.
- User text is inserted with textContent. No requests to an AI service, no analytics, no stored chat history.
- Google Fonts is optional; local system fonts are used if unavailable.

The agent offers to enter your credit card number as a fictional follow-up. There is no payment form, payment processing, or storage. Card-like digit sequences pasted into the prompt are omitted from the transcript.

See PLAN.md for the implementation plan.

Choose Dentex, Claudente, or Gobble-3 in the composer. Each has a different introduction and commentary; switching is locked during an active meal. The menu and chat scroll independently with aligned desktop panels. Guest checks support selectable 18/20/25 percent tips or a custom nonnegative integer token amount, updating the total immediately.

## Restaurants

Use the selector above the menu to switch between Italian (Vibe Dining), Japanese (Mizu), Chinese (Jade Pavilion), French (Maison Vibe), fast food (Byte Burger), and American (The Corner Booth). There are 68 dishes in total, all with scripted tasting narratives and token prices. Each restaurant has its own section headings, visual accents, and check branding. Switching clears the current order and check, preserves chat history, and is disabled while a meal is running.

The live spinner stays after the newest streamed output. Completed Chinese meals leave a clickable fortune cookie beside the check. Its note is revealed only when the guest opens it; restaurant changes and New table clear both artifacts.

The fortune cookie uses a bundled Wikimedia Commons photograph. Include the assets directory when deploying. Attribution and image license are in assets/CREDITS.md, with a source credit beside the cookie. The revealed note is a CSS-rendered folded paper slip.
