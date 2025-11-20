const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// Data file path
const DATA_FILE = path.join(__dirname, 'data.json');
const USERS_FILE = path.join(__dirname, 'users.json');

// Initialize data files if they don't exist
function initializeDataFiles() {
    if (!fs.existsSync(USERS_FILE)) {
        const initialUsers = {
            group1: [
                { id: 1, name: "ابتهال سامي السيحة", points: 0 },
                { id: 2, name: "إبراهيم موسى الزين", points: 0 },
                { id: 3, name: "بيان سامي السيحة", points: 0 },
                { id: 4, name: "جود سعيد الجاسم", points: 0 },
                { id: 5, name: "حسن عبدالله الجاسم", points: 0 },
                { id: 6, name: "حسن مكي الحماده", points: 0 },
                { id: 7, name: "دانة عمار بن عطاء", points: 0 },
                { id: 8, name: "رضا عمار بن عطاء", points: 0 },
                { id: 9, name: "الزهراء حسن الحمادة", points: 0 },
                { id: 10, name: "زهرة خميس الجاسم", points: 0 },
                { id: 11, name: "سعيد خميس الجاسم", points: 0 },
                { id: 12, name: "سكينة سامي السيحة", points: 0 },
                { id: 13, name: "سلمان عقيل الشيخ صالح", points: 0 },
                { id: 14, name: "سليمان مصطفى القمري", points: 0 },
                { id: 15, name: "شكرية خميس الجاسم", points: 0 },
                { id: 16, name: "عبدالله سعيد الجاسم", points: 0 },
                { id: 17, name: "علي أحمد علي الغدير", points: 0 },
                { id: 18, name: "علي موسى الزين", points: 0 },
                { id: 19, name: "عمار علي بن عطاء", points: 0 },
                { id: 20, name: "فاطمة أحمد علي الغدير", points: 0 },
                { id: 21, name: "فاطمة حسن الحماده", points: 0 },
                { id: 22, name: "فاطمة خميس الجاسم", points: 0 },
                { id: 23, name: "فضة علي العطاء", points: 0 },
                { id: 24, name: "فوزية خميس الجاسم", points: 0 },
                { id: 25, name: "كاظم موسى الزين", points: 0 },
                { id: 26, name: "ليلى خميس الجاسم", points: 0 },
                { id: 27, name: "محمد حسن الحماده", points: 0 },
                { id: 28, name: "مريم أحمد علي الغدير", points: 0 },
                { id: 29, name: "مسلم عقيل الشيخ صالح", points: 0 },
                { id: 30, name: "نور سعيد الجاسم", points: 0 }
            ],
            group2: [
                { id: 31, name: "أحمد جواد الجاسم", points: 0 },
                { id: 32, name: "آلاء يوسف السعيد", points: 0 },
                { id: 33, name: "أميرة علي الحسن", points: 0 },
                { id: 34, name: "البتول جواد الجاسم", points: 0 },
                { id: 35, name: "حبيب علي الحسن", points: 0 },
                { id: 36, name: "الحوراء جواد الجاسم", points: 0 },
                { id: 37, name: "رائدة علي الحسن", points: 0 },
                { id: 38, name: "الرباب حبيب الحسن", points: 0 },
                { id: 39, name: "رضا يوسف السعيد", points: 0 },
                { id: 40, name: "رقية حبيب الحسن", points: 0 },
                { id: 41, name: "الزهراء جواد الجاسم", points: 0 },
                { id: 42, name: "زينب حبيب الحسن", points: 0 },
                { id: 43, name: "زينب حسين الحسن", points: 0 },
                { id: 44, name: "سعاد خميس الجاسم", points: 0 },
                { id: 45, name: "علي صادق الحسن", points: 0 },
                { id: 46, name: "علي عبدالجبار الحسن", points: 0 },
                { id: 47, name: "علياء علي الحسن", points: 0 },
                { id: 48, name: "غلا عبدالجبار الحسن", points: 0 },
                { id: 49, name: "فاطمة جواد الجاسم", points: 0 },
                { id: 50, name: "فاطمة حبيب الحسن", points: 0 },
                { id: 51, name: "فاطمة حسين الحسن", points: 0 },
                { id: 52, name: "فاطمة صالح السالم", points: 0 },
                { id: 53, name: "فاطمة عبدالله الحسن", points: 0 },
                { id: 54, name: "فجر صادق الحسن", points: 0 },
                { id: 55, name: "قمر عبدالجبار الحسن", points: 0 },
                { id: 56, name: "كاظم يوسف السعيد", points: 0 },
                { id: 57, name: "ملك عبدالجبار الحسن", points: 0 },
                { id: 58, name: "مهدي حسين الحسن", points: 0 },
                { id: 59, name: "نبراس عمار بن عطاء", points: 0 },
                { id: 60, name: "نجاة علي الحسن", points: 0 },
                { id: 61, name: "وفاء سلمان الحرز", points: 0 },
                { id: 62, name: "وفاء علي الحسن", points: 0 }
            ],
            group3: [
                { id: 63, name: "أمير حسين الشرقي", points: 0 },
                { id: 64, name: "تقي جواد الجاسم", points: 0 },
                { id: 65, name: "جمانه سعيد الجاسم", points: 0 },
                { id: 66, name: "حسن حبيب الحسن", points: 0 },
                { id: 67, name: "الحسن محمد البصري", points: 0 },
                 { id: 68, name: "حسين عبدرب الرسول الشرقي", points: 0 },
                { id: 69, name: "حوراء عبدالعزيز الأحمد", points: 0 },
                { id: 70, name: "زينب يحيى السيحة", points: 0 },
                { id: 71, name: "سامي جعفر السيحة", points: 0 },
                { id: 72, name: "سجاد يحيى السيحة", points: 0 },
                { id: 73, name: "سعاد أحمد القطيفي", points: 0 },
                { id: 74, name: "علي محمد البصري", points: 0 },
                { id: 75, name: "فاطمة سامي السيحة", points: 0 },
                { id: 76, name: "فاطمة سعيد الجاسم", points: 0 },
                { id: 77, name: "فاطمة محمد البصري", points: 0 },
                { id: 78, name: "قاسم حسن الحماده", points: 0 },
                { id: 79, name: "محمد حسين الحسن", points: 0 },
                { id: 80, name: "محمد يحيى السيحة", points: 0 },
                { id: 81, name: "ميامين حسين الشرقي", points: 0 },
                { id: 82, name: "يحيى سامي السيحة", points: 0 }
            ]
        };
        fs.writeFileSync(USERS_FILE, JSON.stringify(initialUsers, null, 2));
        console.log('✅ Users data file created');
    }

    if (!fs.existsSync(DATA_FILE)) {
        const initialData = {
            lastUpdate: new Date().toISOString(),
            stats: {
                totalUsers: 82,
                totalPoints: 0,
                averagePoints: 0
            }
        };
        fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
        console.log('✅ App data file created');
    }
}

// Read data from file
function readData(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return null;
    }
}

// Write data to file
function writeData(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error(`Error writing ${filePath}:`, error);
        return false;
    }
}

// API Routes

// Get all users
app.get('/api/users', (req, res) => {
    const users = readData(USERS_FILE);
    if (users) {
        const allUsers = [
            ...users.group1,
            ...users.group2,
            ...users.group3
        ];
        res.json(allUsers);
    } else {
        res.status(500).json({ error: 'Failed to read users data' });
    }
});

// Get users by group
app.get('/api/users/group/:groupName', (req, res) => {
    const groupName = req.params.groupName;
    const users = readData(USERS_FILE);
    
    if (users && users[groupName]) {
        res.json(users[groupName]);
    } else {
        res.status(404).json({ error: 'Group not found' });
    }
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const users = readData(USERS_FILE);
    
    if (users) {
        const allUsers = [...users.group1, ...users.group2, ...users.group3];
        const user = allUsers.find(u => u.id === userId);
        
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } else {
        res.status(500).json({ error: 'Failed to read users data' });
    }
});

// Update points by user ID
app.put('/api/users/:id/points', (req, res) => {
    const userId = parseInt(req.params.id);
    const { points } = req.body;
    
    if (points === undefined || points < 0) {
        return res.status(400).json({ error: 'Invalid points value' });
    }
    
    const users = readData(USERS_FILE);
    if (!users) {
        return res.status(500).json({ error: 'Failed to read users data' });
    }
    
    let userFound = false;
    let updatedUser = null;
    
    // Search and update user in all groups
    ['group1', 'group2', 'group3'].forEach(group => {
        const userIndex = users[group].findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            users[group][userIndex].points += points;
            userFound = true;
            updatedUser = users[group][userIndex];
        }
    });
    
    if (userFound && writeData(USERS_FILE, users)) {
        updateStats();
        res.json(updatedUser);
    } else {
        res.status(404).json({ error: 'User not found or failed to update' });
    }
});

// Get groups summary
app.get('/api/groups/summary', (req, res) => {
    const users = readData(USERS_FILE);
    if (!users) {
        return res.status(500).json({ error: 'Failed to read users data' });
    }
    
    const group1Total = users.group1.reduce((sum, user) => sum + user.points, 0);
    const group2Total = users.group2.reduce((sum, user) => sum + user.points, 0);
    const group3Total = users.group3.reduce((sum, user) => sum + user.points, 0);
    
    const totalPoints = group1Total + group2Total + group3Total;
    const totalUsers = users.group1.length + users.group2.length + users.group3.length;
    const averagePoints = totalUsers > 0 ? Math.round(totalPoints / totalUsers) : 0;
    
    const summary = {
        group1Total,
        group2Total,
        group3Total,
        totalPoints,
        totalUsers,
        averagePoints,
        lastUpdate: new Date().toISOString()
    };
    
    res.json(summary);
});

// Update stats function
function updateStats() {
    const users = readData(USERS_FILE);
    if (users) {
        const group1Total = users.group1.reduce((sum, user) => sum + user.points, 0);
        const group2Total = users.group2.reduce((sum, user) => sum + user.points, 0);
        const group3Total = users.group3.reduce((sum, user) => sum + user.points, 0);
        
        const totalPoints = group1Total + group2Total + group3Total;
        const totalUsers = users.group1.length + users.group2.length + users.group3.length;
        const averagePoints = totalUsers > 0 ? Math.round(totalPoints / totalUsers) : 0;
        
        const data = readData(DATA_FILE) || {};
        data.stats = {
            group1Total,
            group2Total,
            group3Total,
            totalPoints,
            totalUsers,
            averagePoints
        };
        data.lastUpdate = new Date().toISOString();
        writeData(DATA_FILE, data);
    }
}

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Initialize data files and start server
initializeDataFiles();
app.listen(PORT, () => {
    console.log(`🎯 Points Counter Server running on http://localhost:${PORT}`);
    console.log(`📊 API available at http://localhost:${PORT}/api`);
    console.log('\n✨ المجموعات:');
    console.log('   المجموعة 1: 30 مستخدم');
    console.log('   المجموعة 2: 32 مستخدم'); 
    console.log('   المجموعة 3: 20 مستخدم');
    console.log('   الإجمالي: 82 مستخدم');
});
