module.exports = {
    reactStrictMode: true, // was there by default
    images: {
        domains: ['localhost', 'links.papareact.com', 'fakestoreapi.com'],
      },
    env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    }
};