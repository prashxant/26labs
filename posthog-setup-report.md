# PostHog post-wizard report

The wizard has completed a deep integration of your 26labs Next.js project with PostHog analytics. The integration includes client-side event tracking via the `instrumentation-client.ts` approach (recommended for Next.js 15.3+), server-side tracking with `posthog-node`, and a reverse proxy configuration to ensure events are less likely to be intercepted by tracking blockers.

## Integration Summary

### Files Created
- `instrumentation-client.ts` - Client-side PostHog initialization
- `lib/posthog-server.ts` - Server-side PostHog client for API routes
- `.env.local` - Environment variables for PostHog API key and host (updated)
- `next.config.ts` - Reverse proxy rewrites configuration (updated)

### Files Modified with Event Tracking

| Event Name | Description | File Path |
|------------|-------------|-----------|
| `newsletter_subscribed` | User successfully subscribed to newsletter via hero section | `components/shared/Hero Section/Email.tsx` |
| `newsletter_subscribed` | User successfully subscribed to newsletter via footer | `components/shared/Footer Section/Newsletter.tsx` |
| `newsletter_subscription_failed` | Newsletter subscription failed with error tracking | `components/shared/Hero Section/Email.tsx` |
| `newsletter_subscription_failed` | Newsletter subscription failed with error tracking | `components/shared/Footer Section/Newsletter.tsx` |
| `booking_cta_clicked` | User clicked Book Now CTA in navigation | `components/shared/Navbar/Navbar.tsx` |
| `booking_cta_clicked` | User clicked Book Now CTA in growth section | `components/shared/Growth Section/Growth.tsx` |
| `booking_cta_clicked` | User clicked Contact in mobile menu | `components/shared/Navbar/Navbar.tsx` |
| `pricing_plan_selected` | User clicked Get Started on a pricing plan | `components/shared/Pricing/PriceCard.tsx` |
| `social_link_clicked` | User clicked a social media link | `components/shared/Footer Section/Socials.tsx` |
| `nav_link_clicked` | User clicked navigation menu links | `components/shared/Navbar/Navbar.tsx` |
| `nav_link_clicked` | User clicked Visit Pricing link | `components/shared/Growth Section/Growth.tsx` |
| `subscription_api_called` | Server-side: Subscription API called successfully | `app/api/subscribe/route.ts` |
| `subscription_api_error` | Server-side: Subscription API returned an error | `app/api/subscribe/route.ts` |

### Features Enabled
- **Automatic pageview tracking** via `defaults: '2025-11-30'`
- **Session replay** for user session recordings
- **Exception capture** for error tracking
- **Reverse proxy** to avoid ad blockers

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/298048/dashboard/1208524) - Core analytics dashboard

### Insights
- [Newsletter Subscriptions Trend](https://us.posthog.com/project/298048/insights/N15jOJxI) - Tracks newsletter subscription success and failures over time
- [Booking CTA Clicks](https://us.posthog.com/project/298048/insights/3nWndx5m) - Tracks booking button clicks from different sources
- [Pricing Plan Selection](https://us.posthog.com/project/298048/insights/1DDTC17c) - Tracks which pricing plans users click on
- [Social Media Engagement](https://us.posthog.com/project/298048/insights/htqn0KYq) - Tracks clicks on social media links by platform
- [Navigation & Engagement Overview](https://us.posthog.com/project/298048/insights/BpNoJBD3) - Tracks all navigation and engagement events

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

## Environment Variables

Make sure these environment variables are set in your deployment environment:

NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```
