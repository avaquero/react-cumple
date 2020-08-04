import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddBirthday from "./AddBirthday"
import ActionBar from "./ActionBar"

export default function ListBirthday(props) {
    const { user } = props;
    const [showList, setShowList] = useState(true);

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
