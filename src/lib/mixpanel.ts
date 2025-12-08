import mixpanel from "mixpanel-browser";

// TODO: Replace with your production Mixpanel token
const MIXPANEL_TOKEN = "823c0bf67109647c954ac4e0954c049e"; // Replace with your actual token

mixpanel.init(MIXPANEL_TOKEN, {
  debug: false,
  track_pageview: true,
  persistence: 'localStorage',
});

export const track = (name: string, props?: any) => {
  mixpanel.track(name, props);
};
