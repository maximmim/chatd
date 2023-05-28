import { useRoute } from "@react-navigation/native"
import { View,Text } from "react-native-animatable"
import { gstyles } from "../gstyle"

function ScreanMessage() {
    const rourte = useRoute()
    var data = rourte.params.data
    var text = rourte.params.text
    var nick =  rourte.params.nick
return (
    <View>
        <View style={gstyles.containerinf}>
        <Text style={gstyles.data}>{data}</Text>
        <Text style={gstyles.nick}>{nick}</Text>
        </View>
        <Text style={gstyles.texta}>{text}</Text>
    </View>
)
}

export default ScreanMessage