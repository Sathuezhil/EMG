const services = [
  {
    slug: 'private-guarding-services',
    name: 'Private Guarding Services',
    image: '/images/services/guard.jpg',
    sideImage: '/images/lobby.jpg',
    sideAlt: 'A reception under watch',
    kicker: 'Guarding',
    heading: 'A trained guard on the post you actually need.',
    paragraphs: [
      'Private guarding covers static posts and patrols for homes, offices, compounds, and industrial sites. EMG selects and vets each guard, then matches the shift to the property.',
      'Supervisors check attendance, handover, and how the post is kept. You get a calm presence at the gate, not a generic deployment.'
    ],
    items: ['Static and patrol guarding', 'Gate and reception posts', 'Visitor logging', 'Night shifts', 'Supervisor checks', 'Incident handover notes']
  },
  {
    slug: 'facility-management-services',
    name: 'Facility Management Services',
    image: '/images/services/facility.jpg',
    sideImage: '/images/office.jpg',
    sideAlt: 'A managed office interior',
    kicker: 'Facilities',
    heading: 'One team for the building, not a stack of vendors.',
    paragraphs: [
      'Facility management brings security, cleaning, and day-to-day upkeep under one schedule. EMG coordinates the people and the checks so the site stays presentable and safe.',
      'You keep a single point of contact. We keep the posts, the cleaners, and the reporting aligned with how the building actually runs.'
    ],
    items: ['Site supervision', 'Security and cleaning together', 'Helpdesk-style reporting', 'Vendor coordination', 'Common-area upkeep', 'Scheduled reviews']
  },
  {
    slug: 'housekeeping-services',
    name: 'Housekeeping Services',
    image: '/images/housekeeping.jpg',
    sideImage: '/images/office.jpg',
    sideAlt: 'A clean commercial interior',
    kicker: 'Housekeeping',
    heading: 'Premises that stay clean through the working day.',
    paragraphs: [
      'Housekeeping is scheduled around the building’s hours. Offices, residences, and hospitality sites each get a crew and a checklist matched to the space.',
      'Supervisors inspect the work so the standard on the first day is the standard next month.'
    ],
    items: ['Daily office cleaning', 'Floor and carpet care', 'Washroom upkeep', 'Pantry and common areas', 'Waste removal', 'Supervisor inspections']
  },
  {
    slug: 'lifeguard-services',
    name: 'Lifeguard Services',
    image: '/images/services/pool.jpg',
    sideImage: '/images/services/villa.jpg',
    sideAlt: 'A residential pool area',
    kicker: 'Pools',
    heading: 'A lifeguard on the deck, for the hours the pool is open.',
    paragraphs: [
      'Lifeguard cover is for hotel, club, and residential pools. EMG places trained lifeguards for the sessions you publish, with a clear handover at shift change.',
      'The post is about watching the water, controlling the deck, and responding if someone is in trouble.'
    ],
    items: ['Poolside lifeguard posts', 'Hotel and club pools', 'Residential community pools', 'Shift handover', 'Deck discipline', 'Emergency response']
  },
  {
    slug: 'cctv-control-services',
    name: 'CCTV Control Services',
    image: '/images/services/cctv.jpg',
    sideImage: '/images/security.jpg',
    sideAlt: 'Cameras watching a site',
    kicker: 'Monitoring',
    heading: 'Someone watching the cameras, not a screen left alone.',
    paragraphs: [
      'CCTV control means a trained operator on the monitors, logging what matters and calling the guard on the ground when something needs a person.',
      'EMG staffs control rooms and guard houses so the cameras support the post instead of replacing it.'
    ],
    items: ['Control-room operators', 'Live camera monitoring', 'Incident logs', 'Guard call-out', 'Gate and lobby cameras', 'Shift reports']
  },
  {
    slug: 'events-and-club-bouncer-security-services',
    name: 'Events & Club Bouncer Security Services',
    image: '/images/services/event.jpg',
    sideImage: '/images/dubai-night.jpg',
    sideAlt: 'A city venue at night',
    kicker: 'Events',
    heading: 'Door staff and floor cover for the night you are hosting.',
    paragraphs: [
      'Events and clubs need a door team that checks entry, keeps the floor calm, and works with the venue manager. EMG builds the crew for the guest count and the hours.',
      'Briefing happens before doors open. The lead stays in contact with the house until the last guest is out.'
    ],
    items: ['Door and ID checks', 'Guest-list control', 'Floor supervision', 'Crowd flow', 'Club and private events', 'End-of-night handover']
  },
  {
    slug: 'parking-control-services',
    name: 'Parking Control Services',
    image: '/images/services/parking.jpg',
    sideImage: '/images/services/building.jpg',
    sideAlt: 'A building approach',
    kicker: 'Parking',
    heading: 'The ramp, the barrier, and the bays kept in order.',
    paragraphs: [
      'Parking control covers barriers, visitor bays, and the flow in and out of a building. Guards log vehicles, guide traffic, and keep unauthorized cars out of reserved space.',
      'The post is coordinated with reception so residents, tenants, and guests are not left waiting at the gate.'
    ],
    items: ['Barrier and boom control', 'Visitor vehicle logs', 'Reserved bay enforcement', 'Traffic direction', 'Basement patrols', 'Handover with reception']
  },
  {
    slug: 'building-cleaning-services',
    name: 'Building Cleaning Services',
    image: '/images/services/building.jpg',
    sideImage: '/images/lobby.jpg',
    sideAlt: 'A building lobby',
    kicker: 'Buildings',
    heading: 'Lobbies, cores, and common floors kept to one standard.',
    paragraphs: [
      'Building cleaning is the daily work that keeps a tower or a compound presentable: lobby, lifts, stair cores, and the areas every tenant walks through.',
      'EMG sets the frequency with the property team and inspects the zones that guests notice first.'
    ],
    items: ['Lobby and reception', 'Lift cars and lobbies', 'Stair cores', 'Corridors', 'Glass at entrances', 'Waste rooms']
  },
  {
    slug: 'deep-cleaning-services',
    name: 'Deep Cleaning Services',
    image: '/images/services/deep.jpg',
    sideImage: '/images/housekeeping.jpg',
    sideAlt: 'A detailed clean in progress',
    kicker: 'Deep clean',
    heading: 'The clean that goes past the daily round.',
    paragraphs: [
      'Deep cleaning is for the build-up daily housekeeping does not reach: skirtings, high dust, behind furniture, and washrooms that need a reset.',
      'It is scheduled when the site can be closed or quiet, then handed back ready for normal service.'
    ],
    items: ['High and low dusting', 'Detail washroom clean', 'Floor machine work', 'Kitchen and pantry reset', 'Upholstery spot care', 'After-hours scheduling']
  },
  {
    slug: 'lady-security-guard',
    name: 'Lady Security Guard',
    image: '/images/services/reception.jpg',
    sideImage: '/images/lobby.jpg',
    sideAlt: 'A staffed reception',
    kicker: 'Guarding',
    heading: 'Women officers for the posts that ask for them.',
    paragraphs: [
      'Lady security guards cover receptions, malls, hospitals, schools, and search points where a woman officer is the right presence. EMG deploys trained women guards with the same vetting as every other post.',
      'The shift, the uniform, and the supervisor check are the same standard. The assignment is matched to the site.'
    ],
    items: ['Reception and lobby posts', 'Search and screening points', 'Malls and hospitals', 'Schools and campuses', 'Women’s facilities', 'Supervisor checks']
  },
  {
    slug: 'personal-security-service',
    name: 'Personal Security Service',
    image: '/images/services/personal.jpg',
    sideImage: '/images/services/guard.jpg',
    sideAlt: 'A close protection briefing',
    kicker: 'Close protection',
    heading: 'A guard assigned to a person, not only a gate.',
    paragraphs: [
      'Personal security is for executives, residents, and visitors who need a dedicated officer for movements, meetings, and the home. The plan is written around the routine, not a template.',
      'EMG agrees the hours, the routes, and who the officer reports to before the first shift.'
    ],
    items: ['Executive protection', 'Residence cover', 'Meeting and travel escort', 'Visitor reception', 'Discreet posts', 'Direct reporting line']
  },
  {
    slug: 'residential-cleaning',
    name: 'Residential Cleaning',
    image: '/images/services/home.jpg',
    sideImage: '/images/services/villa.jpg',
    sideAlt: 'A private residence',
    kicker: 'Homes',
    heading: 'A home clean that respects how the family lives.',
    paragraphs: [
      'Residential cleaning is for villas and family homes. The crew works to a room list you approve, on days that fit the household.',
      'Supplies, access, and what must not be moved are agreed before the first visit.'
    ],
    items: ['Villa and home cleans', 'Weekly or daily visits', 'Kitchen and baths', 'Floors and dusting', 'Agreed room list', 'Trusted repeat crews']
  },
  {
    slug: 'apartment-and-villa-cleaning',
    name: 'Apartment & Villa Cleaning',
    image: '/images/services/villa.jpg',
    sideImage: '/images/services/home.jpg',
    sideAlt: 'A villa exterior',
    kicker: 'Residences',
    heading: 'Apartments and villas on a schedule you can keep.',
    paragraphs: [
      'Apartment and villa cleaning covers occupied homes and vacant units between tenants. EMG matches the crew size to the floor area and the finish the owner expects.',
      'Turnover cleans and regular upkeep can sit on the same account, with photos or a checklist after each visit.'
    ],
    items: ['Occupied home upkeep', 'Vacant unit refresh', 'Maid’s room and laundry', 'Balcony and outdoor dust', 'Turnover checklist', 'Owner or agent handover']
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    image: '/images/services/commercial.jpg',
    sideImage: '/images/services/building.jpg',
    sideAlt: 'A commercial frontage',
    kicker: 'Commercial',
    heading: 'Shops, showrooms, and public floors kept open-ready.',
    paragraphs: [
      'Commercial cleaning is timed so customers walk into a finished space. Retail, showrooms, and mixed-use floors get a crew that works before opening or after close.',
      'High-traffic zones are visited more often than back offices. The supervisor checks the front before the doors open.'
    ],
    items: ['Retail floors', 'Showrooms', 'Entrances and glass', 'Washrooms', 'Back-of-house', 'Pre-opening checks']
  },
  {
    slug: 'corporate-office-cleaning',
    name: 'Corporate Office Cleaning',
    image: '/images/office.jpg',
    sideImage: '/images/lobby.jpg',
    sideAlt: 'An office lobby',
    kicker: 'Offices',
    heading: 'Desks, meeting rooms, and pantries ready for the next morning.',
    paragraphs: [
      'Corporate office cleaning follows the working day: after staff leave, or a light day team for washrooms and pantries. Meeting rooms are reset, bins are cleared, and desks are dusted without disturbing papers.',
      'EMG agrees what is in scope on each floor so confidential areas stay with the people you name.'
    ],
    items: ['Workstation dusting', 'Meeting-room reset', 'Pantry and crockery areas', 'Washroom rounds', 'Bin and recycling clearance', 'Confidential-area rules']
  },
  {
    slug: 'vacation-rental-and-airbnb',
    name: 'Vacation Rental & Airbnb',
    image: '/images/services/airbnb.jpg',
    sideImage: '/images/services/home.jpg',
    sideAlt: 'A guest-ready living room',
    kicker: 'Short stays',
    heading: 'A turnover clean between guests, on the checkout clock.',
    paragraphs: [
      'Vacation rental cleaning is a same-day turnover: linen, kitchen, baths, and the small resets guests notice in photos. EMG works to the checkout window the host gives.',
      'Damage, missing items, and anything that needs a maintenance call are reported before the next arrival.'
    ],
    items: ['Same-day turnovers', 'Linen change', 'Kitchen reset', 'Bath and towel set', 'Guest-ready check', 'Issue report to the host']
  },
  {
    slug: 'move-in-move-out',
    name: 'Move-In / Move-Out',
    image: '/images/services/move.jpg',
    sideImage: '/images/services/airbnb.jpg',
    sideAlt: 'An apartment ready to hand over',
    kicker: 'Handover',
    heading: 'The apartment empty, clean, and ready to hand over.',
    paragraphs: [
      'Move-in and move-out cleaning is for the day the keys change. Cupboards, appliances, baths, and floors are cleaned so the unit can be inspected.',
      'EMG schedules the clean after the movers leave and before the landlord or the next tenant walks through.'
    ],
    items: ['Empty-unit clean', 'Inside cupboards', 'Appliance exteriors', 'Bath and kitchen detail', 'Floor wash', 'Handover timing']
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    image: '/images/services/construction.jpg',
    sideImage: '/images/services/building.jpg',
    sideAlt: 'A finished building shell',
    kicker: 'After build',
    heading: 'Dust, film, and debris out before the space is used.',
    paragraphs: [
      'Post-construction cleaning removes fine dust, stickers, and the film trades leave on glass, floors, and fittings. It is a separate visit from daily housekeeping.',
      'EMG stages the clean after the site is safe to enter and before furniture or tenants move in.'
    ],
    items: ['Fine dust removal', 'Glass and frame clean', 'Floor first wash', 'Fixture wipe-down', 'Debris clearance', 'Pre-handover timing']
  },
  {
    slug: 'kitchen-and-bath-sanitization',
    name: 'Kitchen & Bath Sanitization',
    image: '/images/services/kitchen.jpg',
    sideImage: '/images/housekeeping.jpg',
    sideAlt: 'A detailed clean',
    kicker: 'Sanitizing',
    heading: 'Kitchens and baths treated as the rooms that need it most.',
    paragraphs: [
      'Kitchen and bath sanitization focuses on the surfaces people touch and the places daily dusting skips: sinks, taps, counters, appliances, and tile.',
      'It can be a one-off reset or a recurring visit on top of general housekeeping.'
    ],
    items: ['Counter and sink sanitize', 'Tap and handle detail', 'Appliance exteriors', 'Tile and grout wipe', 'Bath and shower', 'Bin and splash zones']
  },
  {
    slug: 'disinfection-and-sanitization',
    name: 'Disinfection & Sanitization',
    image: '/images/services/sanitize.jpg',
    sideImage: '/images/office.jpg',
    sideAlt: 'An office prepared for staff',
    kicker: 'Disinfection',
    heading: 'A planned disinfection, not a spray and a promise.',
    paragraphs: [
      'Disinfection is scheduled for offices, homes, and shared buildings when you need touch points and rooms treated beyond a normal clean. EMG agrees the rooms, the products, and the time the space must stay empty.',
      'The crew works to that brief and hands the site back when it is ready to use again.'
    ],
    items: ['Touch-point treatment', 'Room-by-room plan', 'Offices and homes', 'Shared lobbies', 'Product agreed in advance', 'Re-entry time confirmed']
  }
]

export function getService(slug) {
  return services.find((service) => service.slug === slug)
}

export default services
