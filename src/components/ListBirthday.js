import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import moment from "moment"
import AddBirthday from "./AddBirthday"
import ActionBar from "./ActionBar"
import Birthday from "./Birthday"
import firebase from "../utils/firebase"
import "firebase/firestore"

firebase.firestore().settings({ experimentalForceLongPolling: true });
const db = firebase.firestore(firebase);

export default function ListBirthday(props) {
    const { user } = props;
    const [showList, setShowList] = useState(true);
    const [birthday, setBirthday] = useState([]);
    const [pasatBirthday, setPasatBirthday] = useState([]);

    useEffect(() => {
        setPasatBirthday([]);
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
                formatData(itemsArray);
            });
    }, []);


    const formatData = (items) => {
        const currentData = moment().set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
        });
        const birthdayTempArray = [];
        const pasatBirthdayTempArray = [];
        items.forEach((item) => {
            const fechaCumple = new Date(item.dateBirth.seconds * 1000);
            const fechaCumpleanos = moment(fechaCumple);
            const currentYear = moment().get("year");
            fechaCumpleanos.set({ year: currentYear });

            const diffDate = currentData.diff(fechaCumpleanos, "days");
            const itemTemp = item;
            itemTemp.dateBirth = fechaCumpleanos;
            itemTemp.days = diffDate;

            if (diffDate <= 0) {
                birthdayTempArray.push(itemTemp);
            } else {
                pasatBirthdayTempArray.push(itemTemp);
            }
        });
        setBirthday(birthdayTempArray);
        setPasatBirthday(pasatBirthdayTempArray);
    }

    return (
        <View style={styles.container}>
            {showList ? (
                <ScrollView style={styles.scrollView}>
                    {birthday.map((item, index) => (
                        <Birthday key={index} birthday={item} />
                    ))}
                    {pasatBirthday.map((item, index) => (
                        <Birthday key={index} birthday={item} />
                    ))}
                </ScrollView>
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
    scrollView: {
        marginBottom: 50,
        width: "100%",
    },
})
