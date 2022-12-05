import { hashPassword } from '@redwoodjs/api'

const FAKE_PW = 'passwd';

export const users = [ "Billy", "Stevie", "Kevin", "Molly", "Cassie", "Mary", "Elizabeth", "Aydin", "Mom", ]
  .map((user, i)=>{
    let [hashedPassword, salt] = hashPassword(FAKE_PW);
    return {
      id: i+1,
      name: user,
      email: user.toLowerCase()+"@example.com",
      hashedPassword,
      salt,
      roles: user==="Mom" ? "mom" : user==="Billy" ? "admin" : "basic",
    };
  });

export const exchanges = ['2022'].map((name, i)=>({
  name,
  id: i+1,
  adminId: 1,
  users: {
    connect: users.map((u, i)=>i<8 && ({ id: u.id })).filter(Boolean),
  },
}));


