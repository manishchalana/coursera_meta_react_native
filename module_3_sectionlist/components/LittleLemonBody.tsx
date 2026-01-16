import { SectionList, Text, View } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

export default function LittleLemonBody() {
  const renderItem = ({ item }: { item: { name: string; price: string } }) => (
    <Item name={item.name} price={item.price} />
  );
  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        paddingTop: 15,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          color: "white",
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Welcome to Little Lemon
      </Text>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "black",
              backgroundColor: "white",
              textAlign: "center",
              paddingVertical: 10,
            }}
          >
            {title}
          </Text>
        )}
      />
    </View>
  );
}

function Item({ name, price }: { name: string; price: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <Text style={{ fontSize: 18, color: "white" }}>{name}</Text>
      <Text style={{ fontSize: 18, color: "white" }}>{price}</Text>
    </View>
  );
}
