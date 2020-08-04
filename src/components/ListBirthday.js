import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddBirthday from "./AddBirthday"
import ActionBar from "./ActionBar"
import firebase from "../utils/firebase"
import "firebase/firestore"

firebase.firestore().settings({ experimentalForceLongPolling: true });
const db = firebase.firestore(firebase);

export default function ListBirthday(props) {
    const { user } = props;
    const [showList, setShowList] = useState(true);

    const [birthday, setBirthday] = useState({});

    useEffect(() => {
        setBirthday([]);
        db.collection(user.uid)
            .orderBy("dateBirth", "asc")
            .get()
            .then((response) => {
                const itemsArray = [];
                response.forEach((doc) => {
                    const data = doc.data();
                    data.id = doc.id;
                    itemsArray.push(data);
                });
                setBirthday(itemsArray);
            });
    }, []);

    return (
        <View style={styles.container}>
            {showList ? (
                <>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                </>
            ) : (
                    <AddBirthday user={user} setShowList={setShowList} />
                )}

            <ActionBar showList={showList} setShowList={setShowList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
    },
})
