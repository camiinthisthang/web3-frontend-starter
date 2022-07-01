This is a Typescript project with the following dependencies and logic already implemented: [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) +[`Rainbowkit`](https://github.com/rainbow-me/rainbowkit/tree/main/packages/create-rainbowkit) + [TailwindCSS](https://tailwindcss.com/).

## Getting Started

Inside of the `utils` folder, there is a file `connectContract` which has the logic for you to allow your frontend to communicate with your smart contract, and execute those functions from the front end. 

In your Nextjs pages that trigger your smart contract calls, import this at the top:
`import connectContract from "../utils/connectContract";`
Then when you want to call those functions:
`const myContract = connectContract();`
`const txn = await rsvpContract.youtFunction()`

First, install dependencies:

```bash
npm install
```

Run the server: 
```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about this stack, take a look at the following resources:

- [RainbowKit Documentation](https://rainbowkit.com) - Learn how to customize your wallet connection flow.
- [wagmi Documentation](https://wagmi.sh) - Learn how to interact with Ethereum.
- [Next.js Documentation](https://nextjs.org/docs) - Learn how to build a Next.js application.

You can check out [the RainbowKit GitHub repository](https://github.com/rainbow-me/rainbowkit) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
