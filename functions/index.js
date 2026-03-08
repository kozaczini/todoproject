// index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

// GET /tasks?uid=user123
exports.getTasks = functions.https.onRequest(async (req, res) => {
    const uid = req.query.uid;
    if (!uid) return res.status(400).send("Missing uid");

    try {
        const snapshot = await db.collection("Tasks")
                                 .where("uid", "==", uid)
                                 .get();

        const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json({ tasks });
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

// POST /tasks
exports.addTask = functions.https.onRequest(async (req, res) => {
    const { uid, title, description } = req.body;
    if (!uid || !title) return res.status(400).send("Missing uid or title");

    try {
        const newTask = {
            uid,
            title,
            description: description || "",
            completed: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };
        const docRef = await db.collection("Tasks").add(newTask);
        res.json({ id: docRef.id, ...newTask });
    } catch (err) {
        res.status(500).send(err.toString());
    }
});