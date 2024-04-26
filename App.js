import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce consectetuer risus a nunc. Integer tempor. Nulla pulvinar eleifend sem. In enim a arcu imperdiet malesuada. Proin in tellus sit amet nibh dignissim sagittis. Nullam eget nisl. Vestibulum fermentum tortor id mi. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Curabitur bibendum justo non orci. Nulla quis diam. Mauris metus. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.

Aliquam erat volutpat. Nam quis nulla. Aliquam erat volutpat. Etiam bibendum elit eget erat. In enim a arcu imperdiet malesuada. Mauris metus. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Etiam egestas wisi a erat. Nullam dapibus fermentum ipsum. Praesent dapibus. Mauris tincidunt sem sed arcu. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Nullam at arcu a est sollicitudin euismod. Nulla pulvinar eleifend sem. Etiam bibendum elit eget erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Fusce nibh. Cras elementum. Aenean id metus id velit ullamcorper pulvinar. Nullam rhoncus aliquam metus. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Integer tempor. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Proin mattis lacinia justo. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. In dapibus augue non sapien. Aenean vel massa quis mauris vehicula lacinia. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.

Etiam dictum tincidunt diam. Quisque tincidunt scelerisque libero. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Etiam egestas wisi a erat. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Fusce suscipit libero eget elit. Aliquam erat volutpat. Vivamus luctus egestas leo. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Etiam bibendum elit eget erat. Maecenas aliquet accumsan leo. Nullam at arcu a est sollicitudin euismod. Phasellus faucibus molestie nisl. In enim a arcu imperdiet malesuada. Pellentesque ipsum. Nunc auctor. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis.

Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Sed ac dolor sit amet purus malesuada congue. Vivamus luctus egestas leo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Curabitur bibendum justo non orci. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. In rutrum. Pellentesque pretium lectus id turpis. Duis viverra diam non justo. Nullam dapibus fermentum ipsum. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus.</Text>
      <StatusBar style="auto" ></StatusBar>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
  
    marginHorizontal: 20,
  },
});