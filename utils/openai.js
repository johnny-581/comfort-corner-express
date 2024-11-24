require('dotenv').config();
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const systemPrompt = "Write motivatinal quotes that are concise but brilliant. some good examples are provided below delimited by triple hashtags. You should write a new quote just like those when prompted. Your quote should make people feel better and feel accepted. It should be creative, humourous, concise, and witty. Do not include hashtags in you quote.\n"

const exampleQuotes = [
    "###Believe you can and you’re halfway there.###",
    "###Be yourself; everyone else is already taken.###",
    "###It’s never too old to set another goal or to dream a new dream.###",
    "###No one can make you feel inferior without your consent.###",
    "###Keep going, you’re almost there.###",
    "###Act like it’s impossible to fail.###",
    "###Dream big. Start small.###",
    "###Turn wounds into wisdom.###",
    "###Do small things with great love.###",
    "###Be a voice, not an echo.###",
    "###Embrace the glorious mess that you are.###",
    "###Bloom where you are planted.###"
];

// Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function generateQuote() {
    shuffle(exampleQuotes);
    const selectedQuotes = exampleQuotes.slice(0, 5);
    const joinedQuotes = selectedQuotes.join("\n");
    const systemPromptWithJoinedQuotes = systemPrompt.concat(joinedQuotes);
    // console.log(systemPromptWithJoinedQuotes);

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 1.4,
            messages: [
                {
                    role: "system",
                    content: `${systemPromptWithJoinedQuotes}`
                },
                {
                    role: "user",
                    content: "give me a motivational quote."
                },
            ],
        });

        const phrase = completion.choices[0].message.content;
        // console.log(phrase);
        return phrase;
    } catch (error) {
        console.error('Error generating quote: ', error);
        throw new Error('Failed to generate quote');
    }
}

module.exports = generateQuote;


// alternative prompt

// async function generatePhrase() {
//     try {
//         const completion = await openai.chat.completions.create({
//             model: "gpt-4o-mini",
//             messages: [
//                 {
//                     role: "system",
//                     content: "answer in a consistent style. Mimic famous motivational quotes that are concise but brilliant, that make people feel better and feel accepted. Be creative, humourous, concise, and witty"
//                 },
//                 {
//                     role: "user",
//                     content: "give me a motivational phrase."
//                 },
//                 {
//                     role: "assistant",
//                     content: "Your potential knows no bounds; unleash it and soar!"
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Believe you can and you’re halfway there."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Be yourself; everyone else is already taken."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "It’s never too old to set another goal or to dream a new dream."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "No one can make you feel inferior without your consent."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Keep going, you’re almost there."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Act like it’s impossible to fail."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Dream big. Start small."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Turn wounds into wisdom."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Do small things with great love."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Be a voice, not an echo."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Embrace the glorious mess that you are."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 },
//                 {
//                     role: "assistant",
//                     content: "Bloom where you are planted."
//                 },
//                 {
//                     role: "user",
//                     content: "another"
//                 }
//             ],
//         });

//         const phrase = completion.choices[0].message.content;
//         console.log(phrase);
//         return phrase;
//     } catch (error) {
//         console.error('Error generating phrase: ', error);
//         throw new Error('Failed to generate phrase');
//     }
// }