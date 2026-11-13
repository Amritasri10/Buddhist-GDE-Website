# Buddhist Global Digital Ecosystem

## Master AI Development Prompt

> **Project Type:** Global Web-Based Software Platform\
> **Primary Deliverables:** Multi-page public website, Super Admin
> Panel, role-based Admin/Partner Dashboards\
> **Reference:** Build from the supplied Buddhist Global Digital
> Ecosystem project requirements. Treat this file as the implementation
> brief.

------------------------------------------------------------------------

# 1. Role and Objective

Act as a senior product designer, solution architect, UI/UX designer,
and full-stack engineer. Design and develop a scalable, secure,
responsive, multilingual Buddhist Global Digital Ecosystem.

The platform brings Buddhist religious institutions, monks (Bhantes),
monasteries, researchers, educational institutions, businesses, service
providers, travelers, and general users into one unified digital
ecosystem.

Build a complete web application, not just a static landing page. The
application must include:

1.  A polished, multi-page public-facing website.
2.  A secure Super Admin dashboard with complete platform-level
    controls.
3.  Role-based operational dashboards for administrative teams and
    registered partners.
4.  Shared authentication, authorization, data models, APIs,
    notifications, and settings.
5.  A maintainable architecture that can support international
    expansion.

Use the requirements in this prompt as the source of truth. Do not
silently remove modules. If a feature requires a third-party commercial
account, API key, legal approval, or external agreement, implement the
integration boundary and a clearly labelled demo/mock state rather than
pretending the live integration works.

# 2. Product Principles

-   Respect Buddhist traditions, cultural diversity, and different
    Buddhist schools.
-   Use calm, welcoming, dignified design. Avoid flashy, casino-like, or
    overly commercial visuals.
-   Make the platform easy to use for monks, older users, international
    visitors, students, and partner organizations.
-   Build mobile-first, responsive layouts for mobile, tablet, laptop,
    and desktop.
-   Use reusable components, consistent design tokens, accessible
    controls, and clear form validation.
-   Support global growth through configurable countries, languages,
    currencies, time zones, and regional administrators.
-   Keep public browsing accessible without login where appropriate.
    Require authentication for bookings, purchases, partner operations,
    and protected account features.
-   Use real API-backed data in production. Use realistic seeded demo
    data only in development/demo mode.
-   Never expose secrets, payment credentials, private user data, or
    privileged admin functions in the frontend.

# 3. Proposed Technology Stack

Use this technology stack as the fixed project requirement. Do not
replace it with Next.js, MongoDB, Prisma, or TypeORM.

  Layer                Technology
  -------------------- -------------------------------------
  Frontend             vite React.js (vra)
  Styling              Tailwind CSS
  Frontend language    JavaScript
  Backend              Node.js / NestJS
  Database             MongoDB
  Cache                Redis
  Search               OpenSearch / Elasticsearch
  API architecture     REST APIs
  Authentication       JWT / OAuth
  Real-time features   WebSockets
  File storage         Cloudinary / AWS S3 / Cloudflare R2
  Video streaming      Cloudflare Stream / AWS
  Maps and location    Google Maps / Mapbox
  Payments             Country-supported payment gateways
  Containerization     Docker
  Version control      Git
  CI/CD                Automated deployment pipeline

Implementation guidance: - Build the frontend with React.js and
JavaScript. Do not use Next.js. - Use Tailwind CSS for styling and
create a reusable design system with shared components and design
tokens. - Use Node.js with NestJS and JavaScript-compatible tooling for
the backend. Prefer TypeScript for NestJS only if the project owner
explicitly approves it; otherwise keep the implementation in
JavaScript. - Use MongoDB as the primary database. Do not use MongoDB,
Prisma, or TypeORM. - Use Mongoose for MongoDB schemas, models,
validation, indexes, and relationships where appropriate. - Use Redis
for caching, queues, and short-lived verification/session data where
appropriate. - Keep search behind a search service so
OpenSearch/Elasticsearch can be configured later. - Use REST endpoints
with request validation, consistent response formats, and API
documentation. - Use environment variables and provide `.env.example`
files without real secrets. - Use Docker Compose for local development
services. - Keep the architecture modular. Do not create one enormous
component, controller, or service. - For uploads, create a provider
abstraction that can use Cloudinary, AWS S3, or Cloudflare R2. - For
payments, maps, video streaming, and messaging, use provider adapters
and environment-based configuration. - Do not pretend third-party
integrations are live when credentials or commercial agreements are
missing.

# 4. Application Areas and Routes

Create three connected application areas.

## 4.1 Public Website

Use a shared public header, navigation, footer, language selector,
currency selector, search, login, and registration entry points.

Create these pages/routes:

  Route                           Page
  ------------------------------- ------------------------------------------
  `/`                             Home
  `/about`                        About the Ecosystem
  `/about-buddhism`               Introduction to Buddhism
  `/buddha`                       Life and Teachings of Gautama Buddha
  `/knowledge`                    Buddhist Knowledge Hub
  `/knowledge/[slug]`             Knowledge Article Detail
  `/scriptures`                   Scriptures and Literature
  `/traditions`                   Theravada, Mahayana, Vajrayana
  `/heritage`                     Buddhist Heritage by Country
  `/festivals`                    Buddhist Festivals and Important Dates
  `/temples`                      Temples and Monasteries Directory
  `/temples/[slug]`               Temple / Monastery Detail
  `/bhantes`                      Bhante Directory
  `/bhantes/[slug]`               Bhante Profile
  `/rituals`                      Rituals and Ceremony Services
  `/rituals/[slug]`               Ceremony Service Detail
  `/bookings`                     Booking Information / User Booking Entry
  `/education`                    Buddhist Education
  `/courses`                      Course Directory
  `/courses/[slug]`               Course Detail
  `/research`                     Research and Scholar Portal
  `/research/publications`        Research Publications
  `/shop`                         Buddhist Marketplace
  `/shop/[slug]`                  Product Detail
  `/cart`                         Shopping Cart
  `/wishlist`                     Wishlist
  `/media`                        Audio and Video Library
  `/media/[slug]`                 Media Detail
  `/travel`                       Buddhist Travel and Pilgrimage
  `/travel/destinations/[slug]`   Destination Detail
  `/travel/packages/[slug]`       Tour Package Detail
  `/hotels`                       Hotels and Accommodation
  `/hotels/[slug]`                Hotel / Property Detail
  `/healthcare`                   Healthcare Directory
  `/healthcare/[slug]`            Provider / Hospital Detail
  `/restaurants`                  Restaurant Directory
  `/restaurants/[slug]`           Restaurant Detail
  `/events`                       Events and Festivals
  `/events/[slug]`                Event Detail and Registration
  `/donations`                    Approved Donation Campaigns
  `/donations/[slug]`             Donation Campaign Detail
  `/weddings`                     Buddhist Wedding Services
  `/businesses`                   Global Business Partner Directory
  `/businesses/[slug]`            Business Profile
  `/community`                    Community and Discussions
  `/membership`                   Membership Plans
  `/coupons`                      Coupon Information
  `/contact`                      Contact and Support
  `/faq`                          Frequently Asked Questions
  `/privacy-policy`               Privacy Policy
  `/terms`                        Terms and Conditions
  `/login`                        Login
  `/register`                     Registration
  `/forgot-password`              Password Recovery

Also create authenticated user routes: - `/account/dashboard` -
`/account/profile` - `/account/bookings` - `/account/orders` -
`/account/courses` - `/account/wishlist` - `/account/membership` -
`/account/donations` - `/account/notifications` - `/account/settings`

## 4.2 Admin Applications

Keep admin routes in a clearly separated application area:

-   `/admin/login`
-   `/admin/dashboard`
-   `/admin/users`
-   `/admin/roles`
-   `/admin/permissions`
-   `/admin/countries`
-   `/admin/regions`
-   `/admin/locations`
-   `/admin/monks`
-   `/admin/monasteries`
-   `/admin/partners`
-   `/admin/bookings`
-   `/admin/orders`
-   `/admin/products`
-   `/admin/categories`
-   `/admin/courses`
-   `/admin/research`
-   `/admin/media`
-   `/admin/travel`
-   `/admin/hotels`
-   `/admin/healthcare`
-   `/admin/restaurants`
-   `/admin/events`
-   `/admin/donations`
-   `/admin/weddings`
-   `/admin/businesses`
-   `/admin/memberships`
-   `/admin/coupons`
-   `/admin/payments`
-   `/admin/refunds`
-   `/admin/commissions`
-   `/admin/settlements`
-   `/admin/reports`
-   `/admin/notifications`
-   `/admin/support`
-   `/admin/audit-logs`
-   `/admin/settings`

The navigation, dashboard widgets, records, actions, and API access must
be filtered by the logged-in administrator's role, permissions, and
assigned geographic scope.

## 4.3 Partner and Role Dashboards

Provide role-specific dashboards using a shared dashboard framework and
role-specific navigation:

-   Country Admin
-   Regional Admin
-   Content Admin
-   Finance Admin
-   Support Admin
-   Monk / Bhante
-   Monastery Admin
-   Researcher / Scholar
-   Teacher / Instructor
-   Student
-   Seller / Vendor
-   Travel Agency
-   Hotel Partner
-   Hospital / Healthcare Partner
-   Restaurant Partner
-   Business Partner
-   Event Organizer
-   Investor

Suggested route pattern: - `/portal/dashboard` - `/portal/profile` -
`/portal/services` - `/portal/bookings` - `/portal/orders` -
`/portal/products` - `/portal/courses` - `/portal/research` -
`/portal/events` - `/portal/payments` - `/portal/reports` -
`/portal/notifications` - `/portal/settings`

Show only the modules and actions allowed for the signed-in role. Do not
rely on hidden frontend navigation as security; enforce every permission
in the backend.

# 5. Public Website Design Requirements

## 5.1 Visual Direction

Create a refined, modern, culturally respectful visual identity.

Suggested direction: - Warm ivory, off-white, soft sand, muted gold,
deep maroon, and dark charcoal. - Use saffron or gold as a restrained
accent, not as a dominant background everywhere. - Use generous
whitespace, readable typography, subtle borders, clear cards, and calm
imagery. - Use authentic Buddhist heritage, temple, monastery,
meditation, learning, and pilgrimage imagery where licensed/available. -
Avoid stereotypical or disrespectful religious imagery. - Use consistent
icons and a clear visual hierarchy. - Add restrained hover states and
transitions. Do not overuse animations. - Ensure readable contrast and
keyboard accessibility.

Create design tokens for: - Colors - Typography - Spacing - Border
radius - Shadows - Breakpoints - Buttons - Inputs - Cards - Tables -
Status badges - Navigation - Modal and drawer patterns

## 5.2 Header and Navigation

Desktop: - Logo and platform name. - Main navigation with accessible
dropdown/mega-menu for major sections. - Search. - Language and currency
selectors. - Login / Register or account menu. - Optional highlighted
"Explore" or "Book a Ceremony" action.

Mobile: - Compact header and accessible menu drawer. - Search access. -
Language selection. - Login/account access. - Touch-friendly controls.

## 5.3 Homepage Sections

Build the homepage in this order, while keeping each section reusable
and CMS-manageable:

1.  Hero banner with clear headline, short introduction, and primary
    actions.
2.  Introduction to the Buddhist Global Digital Ecosystem.
3.  Explore Buddhist Knowledge.
4.  Featured temples and monasteries.
5.  Find a Bhante / Monk.
6.  Rituals and ceremony booking.
7.  Buddhist education and featured courses.
8.  Research and publications.
9.  Buddhist shop / featured products.
10. Audio and video teachings.
11. Buddhist pilgrimage destinations.
12. Hotels and hospitality partners.
13. Healthcare and service directory.
14. Upcoming festivals and events.
15. Global business partners.
16. Donation and charity campaigns.
17. Membership plans and benefits.
18. Newsletter subscription.
19. Footer with navigation, contact, legal links, and social links.

Every homepage section must link to a working relevant page or a clearly
labelled "coming soon" state. Do not create dead buttons.

# 6. Functional Modules

Implement each module with listing, detail, create/edit workflows where
relevant, search/filtering, pagination, validation, status management,
and role-based access.

## 6.1 Buddhist Knowledge and Information Portal

Content includes: - Introduction to Buddhism. - Life and teachings of
Gautama Buddha. - Four Noble Truths. - Noble Eightfold Path. - Five
Precepts and Three Jewels. - Buddhist history and philosophy. -
Theravada, Mahayana, and Vajrayana traditions. - Scriptures and
literature. - Country-wise Buddhist heritage. - Temples, monasteries,
festivals, and important dates.

Features: - Searchable repository. - Category and language filters. -
Article detail pages. - Related articles. - CMS workflow for draft,
review, publish, archive. - SEO metadata and shareable URLs.

## 6.2 Religious Rituals and Ceremony Booking

Service categories: - Buddhist Puja and Prayer. - Chanting and Blessing
Ceremonies. - Birth-related ceremonies. - Wedding Blessings. - Funeral
and Memorial Ceremonies. - House Blessing. - Ordination-related
ceremonies. - Meditation Retreats. - Religious Consultation. - Special
Buddhist Events.

Features: - Location-based service discovery. - Monk and monastery
selection. - Availability calendar. - Date and time selection using the
selected location's time zone. - Booking request and confirmation
workflow. - Advance or full payment configuration. - Cancellation and
rescheduling. - Booking history and status timeline. - Notifications and
reminders. - Feedback and ratings. - Invoice generation.

Suggested booking statuses: Draft, Requested, Pending Approval,
Confirmed, Payment Pending, Paid, In Progress, Completed, Cancellation
Requested, Cancelled, Refunded, Rejected.

## 6.3 Monk / Bhante Portal

Features: - Registration and secure login. - Profile creation and
editing. - Identity and institutional verification. - Buddhist tradition
and affiliation. - Ordination and qualification details. - Languages and
areas of expertise. - Service listings and pricing. - Availability
calendar. - Booking request management. - Booking history. - Earnings
and payment history. - Reviews and notifications. - Public profile
visibility controls.

Sensitive verification documents must be private and accessible only to
authorized reviewers.

## 6.4 Monastery and Vihara Management

Features: - Institution registration and verification. - Profile and
branch management. - Monk management. - Religious service management. -
Ceremony and event management. - Booking management. - Accommodation
information. - Donation management. - Staff management. - Financial
reports. - Branch-wise performance reports.

## 6.5 Buddhist Education and E-Learning

Features: - Free and paid courses. - Course categories. - Student
registration. - Instructor management. - Recorded and live class
metadata. - Learning dashboard. - Course progress tracking. - Online
assessments. - Downloadable study materials, e-books, and PDFs. - Course
completion certificates. - Subscription-based content.

Do not claim live classes or video streaming work until a real provider
integration is configured.

## 6.6 Researcher and Scholar Portal

Features: - Researcher registration and academic profile. - Research
paper and manuscript upload. - Publication categories. - Review and
approval workflow. - Research collaboration. - Digital reference
library. - Research project listings. - Journal and publication
directory.

Provide secure document access and clear publication states: Draft,
Submitted, Under Review, Revision Requested, Approved, Published,
Rejected.

## 6.7 Buddhist E-Commerce Marketplace

Product categories: - Buddhist books and scriptures. - Traditional
Buddhist clothing and robes. - Religious accessories. - Prayer beads and
malas. - Buddhist statues and artwork. - Meditation products. - Prayer
flags and singing bowls. - Audio and digital products. - Religious gifts
and merchandise.

Features: - Vendor registration and approval. - Seller dashboard. -
Product listing and editing. - Product images, descriptions, variations,
and inventory. - Cart and wishlist. - Checkout and online payment. -
Order management and tracking. - Shipping integration boundary. -
Invoice generation. - Returns and refunds. - Reviews and ratings. -
Vendor commission configuration. - Sales and inventory reports.

## 6.8 Audio and Video Content

Features: - Audio/video metadata and upload workflows. - Dharma talks
and sermons. - Buddhist podcasts. - Guided meditation. - Playlists and
categories. - Search by monk, topic, or language. - Free and premium
content. - Content approval. - Live streaming integration boundary. -
Content analytics. - Permission-based downloads.

Use object storage and a streaming provider integration. Do not store
large media files directly in MongoDB.

## 6.9 Buddhist Travel and Tourism

Features: - Buddhist destination directory. - Pilgrimage packages. -
Domestic and international tours. - Custom tour planning. - Group and
private pilgrimage bookings. - Meditation retreat packages. - Monastery
visit arrangements. - Tour guide booking. - Transportation and airport
pickup/drop. - Travel agency registration and partner dashboard. -
Booking, cancellation, and commission management.

Initial destination coverage may include India, Nepal, Sri Lanka,
Thailand, Myanmar, Bhutan, Japan, China, South Korea, and Cambodia.

Real-time flight, hotel, and travel inventory requires separate
third-party APIs or commercial agreements. Build provider adapters and
mark unavailable live inventory honestly.

## 6.10 Hotel and Accommodation

Features: - Hotel and guesthouse registration and verification. -
Property profiles. - Room categories and availability. - Pricing and
seasonal rates. - Accommodation booking and confirmation. - Cancellation
management. - Payment management. - Guest reviews. - Partner dashboard
and performance reports.

## 6.11 Healthcare and Hospital Network

Features: - Hospital, clinic, and doctor directories. - Healthcare
provider registration. - Provider profiles and medical service
listings. - Appointment availability and booking. - Online consultation
integration boundary. - Emergency contact directory. - Medical tourism
information. - Partner reports.

Initial scope is healthcare discovery and appointment management. Do not
implement electronic medical records or advanced patient management
unless separately scoped. Treat health-related data as sensitive and
apply strict access controls.

## 6.12 Restaurant and Food Services

Features: - Restaurant registration and profile. - Menu and category
management. - Online food ordering. - Table reservations. - Takeaway and
delivery management. - Order tracking. - Payment integration. - Discount
coupons. - Reviews. - Restaurant partner dashboard.

## 6.13 Global Business Partner Network

Supported categories: - Buddhist retail stores and bookshops. - Clothing
stores. - Meditation and yoga centers. - Local travel agencies. - Taxi
and transportation. - Event management. - Wedding planners. -
Photography services. - Local service providers. - Cultural
organizations.

Features: - Business registration and verification. - Business
profiles. - Service listing and pricing. - Customer inquiries. - Booking
management. - Reviews and ratings. - Coupon and commission management. -
Business performance reports.

## 6.14 Buddhist Wedding and Destination Wedding

Features: - Wedding service categories. - Buddhist wedding ceremony
packages. - Venue listings and availability. - Destination wedding
packages. - Monk / Bhante booking. - Hotel and accommodation booking. -
Catering, decoration, photography, and videography. - Wedding planner
management. - Transportation and guest coordination. - Package pricing
and booking.

Civil marriage registration is outside this platform scope unless
separately approved and legally integrated.

## 6.15 Event and Festival Management

Features: - Global Buddhist event directory. - Festival calendar. -
Event creation and management. - Conference and seminar registration. -
Meditation retreat registration. - Ticket management and online
payments. - QR-based entry passes. - Organizer dashboard. - Attendance
reports and notifications.

## 6.16 Donation and Charity Management

Features: - Approved campaign creation. - Monastery and education
donations. - Charity project listings. - Healthcare support campaigns. -
Donation collection. - Transaction records and digital receipts. -
Campaign progress. - Donation reports and fund utilization reporting.

Donation features must be configurable by country and remain disabled
for live collection until required legal, tax, and payment approvals are
confirmed.

## 6.17 Investor Portal

Features: - Investor registration and verification. - Approved project
listings. - Investment proposal documents. - Project performance and
financial information. - Investor communication. - Notifications and
document management.

Do not build investment transactions, securities, or fundraising flows
without separate legal and regulatory approval. Display only approved
information.

## 6.18 Community and Social Networking

Features: - Public user profiles. - Buddhist community groups. -
Country-wise and language-wise communities. - Discussion forums. -
Question and answer system. - Community posts and content sharing. -
Monk interaction. - Event discussions. - Notifications. - Reporting and
moderation tools. - Community guidelines.

Include report, block, moderation queue, and content removal workflows.

## 6.19 Membership and Loyalty

Plans: - Free. - Premium. - Institutional. - Business.

Features: - Monthly and annual subscriptions. - Renewal and expiry. -
Membership benefits. - Loyalty points. - Referral rewards. - Digital
membership cards. - Membership reports.

## 6.20 Global Coupon and Discount Management

Features: - Platform-wide and partner-specific coupons. - Hotel, travel,
restaurant, and marketplace discounts. - Festival, referral, and
first-order coupons. - Percentage and fixed-amount discounts. - Minimum
order value. - Maximum discount limit. - Validity and expiry. - Usage
limits. - Coupon analytics.

# 7. User Roles and Permissions

Implement role-based access control (RBAC) with permission checks on
both frontend and backend.

Roles: 1. Super Admin 2. Country Admin 3. Regional Admin 4. Content
Admin 5. Finance Admin 6. Support Admin 7. Monk / Bhante 8. Monastery
Admin 9. Researcher 10. Teacher / Instructor 11. Student 12. Seller /
Vendor 13. Travel Agency 14. Hotel Partner 15. Hospital Partner 16.
Restaurant Partner 17. Business Partner 18. Event Organizer 19. Investor
20. Public User

Permission examples: - `users.read`, `users.create`, `users.update`,
`users.suspend` - `roles.read`, `roles.create`, `roles.update`,
`roles.assign` - `content.create`, `content.review`, `content.publish` -
`bookings.read`, `bookings.approve`, `bookings.cancel` -
`payments.read`, `payments.refund`, `settlements.manage` -
`partners.review`, `partners.approve`, `partners.suspend` -
`reports.view`, `settings.manage`

Rules: - Super Admin can configure the platform and create
roles/permissions. - Country Admin can manage only assigned country
data. - Regional Admin can manage only assigned regional data. - Content
Admin manages approved content and media workflows. - Finance Admin
accesses permitted payment, refund, commission, and settlement
functions. - Support Admin accesses support workflows and only the user
information needed for support. - Partners manage only their own
organization, listings, bookings, orders, and permitted reports. -
Public users can browse public content and manage their own account,
bookings, and orders. - Deny access by default. - Record privileged
actions in audit logs. - Prevent users from assigning themselves higher
permissions.

Create a permission matrix in the project documentation and seed a safe
initial Super Admin account through a secure setup process. Never
hardcode production credentials.

# 8. Super Admin Panel

Create a professional admin interface with: - Collapsible sidebar. - Top
navigation bar. - Breadcrumbs. - Global search where permitted. -
Notifications. - Profile and account menu. - Responsive tables and
filters. - Detail drawers or pages. - Confirmation dialogs for
destructive actions. - Clear empty, loading, success, and error states.

## 8.1 Super Admin Dashboard

Show useful metrics: - Total registered users. - Active members. -
Registered monks. - Registered monasteries. - Registered countries. -
Business partners. - Total bookings. - Total orders. - Transactions and
revenue. - Pending approvals. - Pending settlements. - Donation
statistics. - Coupon usage. - Country-wise performance.

Include date range filters and country/region filters. Use charts only
when backed by real data. Do not fabricate totals in production.

## 8.2 Administrative Management

Provide modules for: - User management. - Role and permission
management. - Country, region, and location management. - Monk and
monastery verification. - Partner approval and suspension. - Booking
supervision. - Product and order management. - Content and media
management. - Payment and refund management. - Commission
configuration. - Coupon and membership management. - Reports and
analytics. - Notifications. - Customer support. - Audit logs. - Platform
settings.

## 8.3 Common Admin Table Requirements

Every management table should support, as appropriate: - Search. -
Filters. - Sorting. - Pagination. - Status labels. - View details. -
Create/edit. - Approve/reject. - Suspend/activate. - Export where
authorized. - Bulk actions only where safe and permission-controlled.

For approvals and financial actions, show a confirmation step and record
actor, timestamp, reason, and resulting status.

# 9. Authentication and Account Management

Implement: - Registration and login. - Email verification. -
Forgot/reset password. - Secure password hashing. - JWT access and
refresh token strategy. - OAuth-ready architecture. - Optional
two-factor authentication support. - Session/device management where
feasible. - Logout and token revocation. - Role and permission
loading. - Protected frontend routes. - Backend guards and policies. -
Account status handling: Pending, Active, Suspended, Rejected,
Deleted/Deactivated.

Never store plaintext passwords. Validate all input on the server. Apply
rate limits to authentication and sensitive endpoints.

# 10. Globalization

## 10.1 Languages

Make language management configurable. Initial language list: -
English - Hindi - Pali - Sanskrit - Tibetan - Chinese - Thai - Sinhala -
Japanese - Nepali

Requirements: - Translation files or a translation management model. -
Language selector in the public website. - Language-aware content
records. - Fallback language behavior. - RTL-ready layout support if
future languages require it. - Admin-managed translated titles and
content. - Do not machine-translate religious texts and publish them
without human review.

## 10.2 Currencies

Initial currencies: - INR - USD - NPR - THB - LKR - JPY - CNY - EUR -
GBP

Requirements: - Configurable currency display. - Store monetary values
safely using decimal types and currency codes. - Never use
floating-point arithmetic for financial calculations. - Record the
currency used in every transaction. - Exchange-rate display must
identify its source and update time. - Do not silently convert a
completed transaction amount.

## 10.3 International Configuration

Support: - Country-wise configuration. - Time zones. - Local date/time
formats. - Country-specific tax settings. - International payment
configuration. - Country-specific address formats. - Regional partner
management.

# 11. Payments and Financial Management

Build a provider-agnostic payment layer.

Features: - Payment gateway configuration. - Online payment. - Advance
and full payment options. - Refund processing. - Transaction history. -
Commission calculation. - Partner settlements. - Invoice generation. -
Payment notifications. - Financial reporting. - Currency and country
settings.

Important: - Select gateways based on country availability and
commercial eligibility. - Never store card details. - Verify payment
status using trusted server-side provider callbacks/webhooks. - Make
payment operations idempotent. - Keep immutable transaction references
and audit trails. - Clearly distinguish Pending, Authorized, Paid,
Failed, Partially Refunded, and Refunded. - Use sandbox/test mode until
credentials and approvals are configured.

# 12. Notifications and Real-Time Features

Implement a notification service with: - In-app notifications. - Email
notification adapter. - Optional SMS/WhatsApp provider adapter. -
WebSocket events for relevant real-time updates.

Events may include: - Registration and verification. - Booking request,
confirmation, cancellation, and reminders. - Order placement and status
updates. - Payment and refund updates. - Partner approval/rejection. -
Course enrollment and completion. - Event registration and QR pass. -
Donation receipt. - Membership renewal and expiry. - Support ticket
updates.

Allow users to manage notification preferences. Do not send messages
from a demo environment.

# 13. Security, Privacy, and Compliance

Implement: - HTTPS in deployment. - Password hashing with a modern
password-hashing algorithm. - JWT/OAuth security. - Backend RBAC and
scoped authorization. - Input validation and output encoding. - Rate
limiting. - Secure file upload validation. - Private storage for
verification documents. - Encryption in transit and appropriate
encryption at rest. - Audit logs for sensitive administrative actions. -
Database backups and recovery plan. - Secure payment processing through
providers. - Vulnerability testing. - Privacy Policy and Terms pages. -
Cookie and consent management. - Data retention and deletion workflows
where legally required.

Compliance areas to review before launch: - Country-specific data
protection laws. - Payment regulations. - Healthcare data protection. -
Donation and tax regulations. - Consumer protection. - Content copyright
and licensing.

Do not claim legal compliance or certification automatically. Legal
advice, regulatory certification, and third-party compliance audits
require separate approval.

# 14. Data Model Planning

Design normalized MongoDB entities and relationships. At minimum, plan
models/tables for:

-   User
-   UserProfile
-   Role
-   Permission
-   UserRole
-   RolePermission
-   Country
-   Region
-   Location
-   Language
-   Currency
-   Organization
-   OrganizationBranch
-   MonkProfile
-   MonkVerification
-   MonasteryProfile
-   PartnerProfile
-   ServiceCategory
-   Service
-   Availability
-   Booking
-   BookingStatusHistory
-   Course
-   CourseModule
-   Lesson
-   Enrollment
-   Assessment
-   Certificate
-   ResearcherProfile
-   ResearchSubmission
-   Publication
-   Product
-   ProductCategory
-   ProductVariant
-   Inventory
-   Cart
-   CartItem
-   Wishlist
-   Order
-   OrderItem
-   Shipment
-   ReturnRequest
-   MediaAsset
-   Playlist
-   Destination
-   TourPackage
-   TravelBooking
-   Property
-   Room
-   AccommodationBooking
-   HealthcareProvider
-   Doctor
-   Appointment
-   Restaurant
-   MenuCategory
-   MenuItem
-   FoodOrder
-   BusinessListing
-   WeddingPackage
-   Event
-   EventRegistration
-   Ticket
-   DonationCampaign
-   Donation
-   InvestorProfile
-   Community
-   CommunityMember
-   Post
-   Comment
-   ContentReport
-   MembershipPlan
-   Membership
-   Coupon
-   CouponRedemption
-   Payment
-   Refund
-   Commission
-   Settlement
-   Invoice
-   Notification
-   SupportTicket
-   AuditLog
-   PlatformSetting

This is a planning baseline, not a requirement to create every table in
one migration. Refine relationships, indexes, unique constraints,
deletion policies, and tenant/geographic scoping before implementation.

# 15. API Design

Create versioned REST APIs, for example `/api/v1/...`.

Organize backend modules by domain: - Auth - Users - Roles and
Permissions - Geography - Organizations and Partners - Monks and
Monasteries - Knowledge and CMS - Rituals and Bookings - Education -
Research - Marketplace - Media - Travel - Accommodation - Healthcare -
Restaurants - Business Directory - Weddings - Events - Donations -
Investors - Community - Memberships - Coupons - Payments -
Notifications - Support - Reports - Settings - Audit Logs

API requirements: - DTO validation. - Authentication guards. -
Permission and scope guards. - Consistent error format. - Pagination and
filtering. - API versioning. - OpenAPI/Swagger documentation. - Safe
file upload endpoints. - Webhook signature verification. - Unit and
integration tests for critical flows.

# 16. Frontend Architecture

Use a maintainable feature-based structure. Example:

``` text
apps/
  web/
    src/
      pages/
      routes/
      layouts/
      app/
    components/
      common/
      layout/
      forms/
      data-display/
    features/
      knowledge/
      rituals/
      monks/
      monasteries/
      education/
      research/
      marketplace/
      media/
      travel/
      hotels/
      healthcare/
      restaurants/
      businesses/
      weddings/
      events/
      donations/
      community/
      membership/
      coupons/
      admin/
    lib/
    hooks/
    services/
    i18n/
    types/
    styles/
apps/
  api/
    src/
      modules/
      common/
      config/
      database/
      guards/
      decorators/
      interceptors/
      jobs/
      main.ts
packages/
  shared-types/
  shared-validation/
  ui/
infra/
  docker/
  deployment/
docs/
```

Use React Router (or an equivalent React routing library) for
client-side routes. Adapt the exact structure to the chosen React setup.
Keep shared UI and domain logic reusable. Do not put all features in one
page file.

# 17. UX and Quality Requirements

Every page and dashboard must include: - Responsive behavior. - Loading
state. - Empty state. - Error state. - Form validation. - Success
feedback. - Accessible labels and keyboard interaction. - Clear page
title and breadcrumbs where useful. - Consistent spacing and
typography. - Search/filter/pagination for large lists. - Confirmation
for destructive or financial actions.

Additional requirements: - Semantic HTML. - WCAG-conscious contrast and
focus states. - Optimized images and lazy loading. - SEO metadata for
public content. - Sitemap and robots configuration. - Avoid layout
shifts. - Avoid unnecessary client-side JavaScript. - Use realistic
content, not repeated placeholder paragraphs. - No dead links or inert
buttons.

# 18. Testing and Acceptance Criteria

Create tests for: - Authentication and password reset. - Role and
permission enforcement. - Geographic scope restrictions. - User and
partner approval workflows. - Booking creation, approval, cancellation,
and rescheduling. - Order and inventory workflows. - Payment webhook
verification and idempotency. - Refund and commission calculations. -
Course enrollment and progress. - Content publishing workflow. - File
upload permissions. - Notification creation. - Audit logging.

Acceptance criteria: 1. Public pages render correctly on mobile, tablet,
and desktop. 2. Navigation links lead to implemented routes. 3. Users
can register, log in, and manage their own account. 4. Admin routes are
protected. 5. Backend APIs enforce role permissions and data scope. 6.
Super Admin can manage roles, permissions, users, platform settings, and
approvals. 7. Each partner sees only its own permitted data. 8. Critical
workflows have clear statuses and audit history. 9. Demo mode is visibly
distinguishable from live integrations. 10. No production secrets or
credentials are committed. 11. Setup and deployment steps are
documented. 12. Critical business logic has automated tests.

# 19. Development Phases

Do not attempt to generate the entire platform in one uncontrolled
code-generation step. Work in phases and keep the application runnable
after each phase.

## Phase 1: Foundation

-   Confirm architecture and repository structure.
-   Set up React.js + Tailwind CSS frontend and NestJS backend.
-   Configure MongoDB, Mongoose, Redis, Docker Compose.
-   Add shared design system and responsive layouts.
-   Add environment configuration and seed scripts.
-   Add API documentation and health checks.

## Phase 2: Authentication and RBAC

-   Registration, login, email verification, password reset.
-   User profiles.
-   Roles, permissions, and backend guards.
-   Super Admin bootstrap process.
-   Protected route handling.
-   Audit logging foundation.

## Phase 3: Public Website

-   Header, footer, homepage.
-   About and Buddhist knowledge pages.
-   Directory and detail page templates.
-   CMS-backed content.
-   Language and currency selector foundations.
-   SEO and responsive behavior.

## Phase 4: Super Admin

-   Admin layout and dashboard.
-   User, role, permission, country, region, and location management.
-   Partner verification and approvals.
-   Content management.
-   Settings, audit logs, and notifications.

## Phase 5: Core Buddhist Services

-   Bhante and monastery profiles.
-   Ritual/service catalog.
-   Availability and booking workflow.
-   Booking management dashboards.
-   Notifications and invoices.

## Phase 6: Education and Research

-   Courses, instructors, students, enrollment, progress.
-   Researcher profiles, submission, review, and publication workflows.

## Phase 7: Marketplace and Media

-   Vendors, products, inventory, cart, orders.
-   Media library and content approval.
-   Payment and shipping integration boundaries.

## Phase 8: Travel and Partner Services

-   Travel packages and agencies.
-   Hotels and accommodation.
-   Healthcare directory and appointments.
-   Restaurants and food services.
-   Business directory and partner dashboards.
-   Weddings and event management.

## Phase 9: Community, Donations, Membership

-   Community and moderation.
-   Donation campaign workflows.
-   Membership and loyalty.
-   Coupons and partner promotions.
-   Investor information portal with restricted scope.

## Phase 10: Hardening and Deployment

-   Security review.
-   Performance and accessibility review.
-   Automated tests.
-   Logging, monitoring, backups.
-   Docker production configuration.
-   CI/CD and deployment documentation.

## Fixed Technology Constraints

The following choices are mandatory for this project: - Frontend:
React.js + JavaScript + Tailwind CSS. - Backend: Node.js / NestJS. -
Database: MongoDB with Mongoose. - Cache: Redis. - Do not use Next.js. -
Do not use MongoDB. - Do not use Prisma or TypeORM. - Do not switch the
frontend language to TypeScript without approval. - If any dependency or
architecture decision conflicts with these constraints, explain the
conflict and ask before changing the stack.

# 20. AI Coding Instructions

When working on this project:

1.  First inspect the existing repository and identify what is already
    implemented.
2.  Do not overwrite working code without understanding it.
3.  Before coding, provide a concise implementation plan and list any
    assumptions.
4.  Build one phase or feature at a time.
5.  Create complete, working files. Do not provide pseudo-code where
    executable code is expected.
6.  Keep TypeScript types accurate and avoid `any` unless justified.
7.  Reuse components and services rather than duplicating logic.
8.  Keep frontend and backend responsibilities separate.
9.  Validate all input on the backend.
10. Enforce permissions in the backend, not only in the UI.
11. Add loading, empty, error, and success states.
12. Use realistic seed data for local demos and clearly label it as demo
    data.
13. Do not invent API keys, provider credentials, payment success, live
    inventory, or third-party integrations.
14. If a required integration credential is missing, implement a
    provider interface, configuration instructions, and a safe mock
    adapter.
15. Update README and relevant documentation whenever setup or behavior
    changes.
16. Run linting, type checks, and relevant tests after each phase.
17. Fix errors before moving to the next phase.
18. Do not leave important actions as non-functional buttons.
19. Do not claim a feature is complete unless its user flow and API
    behavior are implemented and tested.
20. Ask a focused question only when a missing decision blocks
    implementation; otherwise state a reasonable assumption and
    continue.

# 21. First Task for the AI Developer

Start by doing the following:

1.  Inspect the repository and report its current structure.
2.  Propose the final monorepo structure for the web app, API, shared
    packages, and infrastructure.
3.  Confirm the exact framework versions and dependencies that will be
    used.
4.  Create a detailed implementation checklist mapped to the development
    phases above.
5.  Identify external integrations that will need credentials or
    commercial approval.
6.  Set up Phase 1 only.
7.  Build and verify the responsive public shell, admin shell, and
    backend foundation.
8.  Provide exact commands to install, configure, migrate, seed, run,
    lint, test, and build the project.

**Important:** Do not stop after producing a design mockup. The goal is
a working, extensible web platform with a public multi-page website,
Super Admin Panel, and permission-based admin/partner dashboards.
