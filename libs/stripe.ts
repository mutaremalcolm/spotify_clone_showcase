import Stripe from "stripe";

export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY ?? '',
    {
        // @ts-ignore
        apiVersion: '2022-08-01',
        appInfo: {
            name: 'Spotify Clone 1',
            version: '0.1.0'
        }
    }
);