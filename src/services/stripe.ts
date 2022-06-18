import Stripe from "stripe";
import { version, name } from '../../package.json'; // infos do package

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY, // Puxa de variáveis de ambiente
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: name,
            version: version
        }
    }
)