# PenPal Tracker

### Lambda School Hackathon - July 2018

##### Kaitlyn Schorr, Zack Hitchcock, Sumayyah Asgar, Nicky Chen, Habib Rehman

## Purpose:

- An app that lets users keep track of pen pals, so you never lose track of who you expect to receive a letter from, or to whom you need to send a letter. PenPal Tracker stores names, addresses, and dates of letters sent and received. It also contains notes about pertinent information about your pen pals, such as birthdays, anniversaries, special events, and named of loved ones, to make sure you don't forget who you are writing to and about!

## API Endpoints:

- The following is a list of API endpoints available:

| TYPE   | URL              | Data                                      |
| ------ | ---------------- | ----------------------------------------- |
| POST   | /api/signup      | username*, password*                      |
| POST   | /api/login       | username*, password*                      |
| POST   | /api/penpals     | userId, name, address                     |
| DELETE | /api/penpals/:id | userId                                    |
| PUT    | /api/penpals/:id | userId, name, address                     |
| GET    | /api/penpals/:id | userId                                    |
| GET    | /api/penpal/:id  | userId                                    |
| POST   | /api/letters     | date, outbound, penpalId, image           |
| DELETE | /api/letters/:id | letterId                                  |
| PUT    | /api/letters/:id | letterId, date, outbound, penpalId, image |
| GET    | /api/letters/:id | letterId                                  |
| GET    | /api/letter/:id  | letterId                                  |

all fields marked with \* are required.

## MVP

- Sign-in/Log-in Functionality
  - Users can only see their own data
- Penpal List
  - Address Book - All your addresses in a convenient place
  - Notes - Keep track of easy to forget details about your penpal
- Letter Tracking
  - Dates of Outbound & Inbound Letters from each Penpal
  - Notification of pending letters - Tracks how long it's been since you responded to a letter you received!

## Extra Features

- Letter Heat Map - A calendar that visually shows your letter writing activity
- Penpal Map Homepage - A homepage that displays your penpals on a world map instead of as cards
- Image attachment - Attach images/scans of your sent/received letters
- Profile Pictures - Either upload an image of your penpal, or choose from an assortment of avatars
- Statistics page - A mathematical summary of your letter writing including:
  - Average days to respond
  - Number of letters sent
  - Estimated word count
  - Total number of miles your letters have travelled
