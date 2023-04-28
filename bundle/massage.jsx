import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    View,
    Text,
    TextInput,
    Button,
    Alert,
    ImageComponent,
    TouchableOpacity
} from 'react-native';




export default function Message({dext}) {

    return (
<View>
<Text>
{
    dext
}
</Text>
</View>
    )
}