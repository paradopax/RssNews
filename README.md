## Database

PostgreSQL database (12.10)

## Relations

User(**id**, email, password, name, createdAt, updatedAt)

Sources(**id**, link, title, description, createdAt, updatedAt, UserId)

FeedItem(**link**, <ins>source: Sources.id</ins>, title, date, summary, description, content)

Subscriber(**<ins>userID: User.id</ins>, <ins>sorceID: Sources.id</ins>**, notification)