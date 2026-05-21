const db = require('./src/_helpers/db');

async function checkUser() {
    try {
        await db.initialize();
        const email = 'nikolopacholo@gmail.com';
        const account = await db.Account.findOne({ where: { email } });
        
        if (account) {
            console.log('---------------------------------');
            console.log(`✅ User FOUND: ${email}`);
            console.log(`Role: ${account.role}`);
            console.log(`Verified: ${account.verified ? account.verified : '❌ NO'}`);
            console.log('---------------------------------');
        } else {
            console.log('---------------------------------');
            console.log(`❌ User NOT FOUND in Aiven database: ${email}`);
            console.log('This means you need to REGISTER this email first on the new site.');
            console.log('---------------------------------');
            
            const allUsers = await db.Account.findAll();
            console.log(`Total users in DB: ${allUsers.length}`);
            allUsers.forEach(u => console.log(` - ${u.email}`));
        }
        process.exit(0);
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

checkUser();