import db from './src/models';
import bcrypt from 'bcryptjs';

async function checkAndCreateUser() {
  try {
    const email = 'user@gmail.com';
    const user = await db.User.findOne({ where: { email } });

    if (user) {
      console.log(`User ${email} already exists.`);
      // Optional: Update password to be sure
      // const hash = bcrypt.hashSync('14031609', bcrypt.genSaltSync(10));
      // await user.update({ password: hash });
      // console.log(`Password for ${email} reset to 14031609`);
    } else {
      console.log(`User ${email} does not exist. Creating...`);
      const hash = bcrypt.hashSync('14031609', bcrypt.genSaltSync(10));
      await db.User.create({
        name: 'Regular User',
        email: email,
        password: hash,
        role_code: 'R3',
        avatar: 'https://example.com/user-avatar.png'
      });
      console.log(`User ${email} created successfully with password '14031609'.`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

checkAndCreateUser();
