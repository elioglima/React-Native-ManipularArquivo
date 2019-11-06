# reactNativeManipularArquivo

# react-navigation

    Obs: para funcionamento correto do react-navigation "createBottomTabNavigator" é necessatio efetuar os procedimentos abaixo.

#

    yarn add react-navigation
    yarn add react-native-reanimated
    yarn add react-native-gesture-handler
    yarn add react-native-screens

    react-native link react-native-reanimated
    react-native link react-native-gesture-handler
    react-native link react-native-screens

# TextInput

        obs: Usando multi-linhas

        <TextInput
            multiline
            numberOfLines={4}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
