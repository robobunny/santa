-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wish" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "price" TEXT,
    "url" TEXT,
    CONSTRAINT "Wish_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Wish" ("description", "id", "name", "price", "url", "userId") SELECT "description", "id", "name", "price", "url", "userId" FROM "Wish";
DROP TABLE "Wish";
ALTER TABLE "new_Wish" RENAME TO "Wish";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "pw" TEXT,
    "salt" TEXT,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);
INSERT INTO "new_User" ("email", "id", "name", "pw", "resetToken", "resetTokenExpiresAt", "salt") SELECT "email", "id", "name", "pw", "resetToken", "resetTokenExpiresAt", "salt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
