import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'



function LiveStreams({ item, navigation }){

const onPressBookmarkStream = () => {}
const onPressShareStream = () => {}

function liveStreamsItem({ item }){
return (
<View style={styles.live_streams_item}>
<Image
    style={styles.stream_thumbnail}
    source={{uri: item.stream_thumbnail}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.stream_title} numberOfLines={1}>{item.stream_title}</Text>
<Text style={styles.stream_description}>{item.stream_description}</Text>
</View>
<View style={{flexDirection: 'row'}}>
<TouchableOpacity  onPress={onPressBookmarkStream}>
    <View style={styles.bookmark_stream}>{'Bookmark Stream'}</View>
</TouchableOpacity>
<TouchableOpacity  onPress={onPressShareStream}>
    <View style={styles.share_stream}>{'Share Stream'}</View>
</TouchableOpacity>
</View>
</View>
)}

return (
<FlatList
    style={styles.live_streams}
    data={item}
    renderItem={liveStreamsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default LiveStreams;

const styles = StyleSheet.create({
    "stream_thumbnail": {
        "width": "100vw",
        "height": "70vw",
        "marginTop": 5
    },
    "stream_title": {
        "flex": 1,
        "color": "#333333",
        "fontSize": 17,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "stream_description": {
        "fontSize": 13,
        "fontWeight": "250",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "bookmark_stream": {
        "flex": 1,
        "padding": 10,
        "margin": "10px",
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white",
        "borderRadius": 6
    },
    "share_stream": {
        "flex": 1,
        "padding": 10,
        "margin": "10px",
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white",
        "borderRadius": 6
    }
});