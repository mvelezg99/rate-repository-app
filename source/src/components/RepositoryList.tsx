import repositories from "../data/repositories.json";
import { FlatList, Text, View } from "react-native";

const RepositoryList = (): JSX.Element => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <View key={repo.id}>
          <Text>id: {repo.id}</Text>
        </View>
      )}
    />
  );
};

export default RepositoryList;
