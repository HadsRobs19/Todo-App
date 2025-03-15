import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { CheckBox, Input, Button } from '@react-native-elements/base';

const TodoApp = () => {
  const [tasks, set] = useState ([
    { key: '1', description: 'Do React Native Homework', completed: false},
    { key: '2', description: 'Clean room', completed: false},
    { key: '3', description: 'Do laundry', completed: false},
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleTaskCompletion = (key) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
      task.key === key ? { ...task, completed: !task.completd } : task)
    );
  };

  const addTask = () => {
    if(newTask.trim() !== '') {
      setTasks([...tasks, { key: Date.now().toString(), description: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={task}
        renderItem = {({ item }) => (
          <CheckBox
            title={<Text style={item.completed ? styles.completedTask : styles.task}>{item.description}</Text>}
            checked={item.completed}
            onPress={() => toggleTaskCompletion(item.key)}
          />
        )}

        keyExtractor={(item) => item.key}
      />

    <Input
      placeholder="Add new task..."
      value = {newTask}
      onChangeText = {setNewTask}
    />

    <Button title="Add" onPress = {addTask} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },

  task: {
    fontSize: 16,
  },

  completedTask: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
  },
});

export default TodoApp;