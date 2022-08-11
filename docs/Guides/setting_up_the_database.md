# Setting up the database

## Installing ContechOS

ContechOS is a free open source database which allows templating data.
It can be found [there](https://github.com/nikolai4D/ContechOS).

## Setting the data model

ChecklistApp use a specific data structure. It can found [here].
In order to work, this file must be in a folder named db placed at the same directory level as your ChecklistApp.

## Adding nodes

ContechOS organize its data upon a hierarchy of levels.

We provide the data structure in order to turn ContechOS into a checklist engine.
This is the low level (types like questions, answers, questions groups).
In the ContechOS, you will find it under the def/object section. You don't need and should not modify it as long as you intend to use ContechOS as the ChecklistApp database engine.

It is up to you to add your specific, higher level, data (the actual questions, answers, questions groups...).
You can do so by exploring the Type/data section of ContechOS.

### Type nodes

The red nodes are types. We have provided a basic structure that works well with ChecklistApp, so you should not need to create new type nodes. But you can rename them to better reflect your data.
To edit a type node, left click on it and a modal will appear.

### Data nodes

The grey ones are the actual data, instances of the type nodes. These you should add and delete as much as you want.
You can edit one by clicking on it, a modal will appear.
To create a new data node, right click on its type node, a modal will appear.

### Relations

ContechOS is a graph database, this means, between other things, that relations are at the core of the system. When you create a data node, a relation with its type node is automatically created. But you might need to add other relations, you can do so by right clicking on one of the two nodes to link and clincking on the link option.
A modal will appear. Click on the second node to link them together.

In order to be able to connect two instance nodes together, their respective type nodes must be linked together (these type nodes links are already set up, you should not need to add new ones).

## Updating the .env file

The .env file contains many references to the ids of your ContechOS instance.
Some of this ids might be specific to your implementation and you will need to add them to the .env file.

To find the id of a specific node, explore ContechOS in the brwoser and click on the desired node.
It logs an object with an id in the console. You can copy this id in your .env file.