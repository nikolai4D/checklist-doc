---
sidebar_position: 1
---

# Introduction

Checklist App allows its users to quickly generate checklist from a set of predefined parameters and store it in an online or local database.

## System requirements

Both ChecklistApp and ContechOS are based on Node.js.

## The database

Checklist App use ContechOS, an open source database, for two things:

- To store the checklists models.
- To store the generated list after they have been filled.

ContechOS is perfect for our usecase as we want to enforce and propose a certain structure for our data. This enforced structure allows us to efficently store data but also to share and process it easily.

While an understanding of ContechOS is required to set up the checklist models, using the app itself doesn't involve any technical skill.

## Separation of concerns

The interactions with ChecklistApp are separated between two distinct phases:

- Setting up the checklist model.
- Generating a checklist.

ChecklistApp aims to provide an easy-to-use tool for non-developers people. As such, the generation of the checklist is made simple and doesn't involve any technical skill.

Setting up the checklist model will however require an understanding of ContechOS.

The good part is: one can setup the the checklist model, and everybody can then quickly generate checklists.

## Create a checklist model

## Generate a checklist

Once you are logged in the website, press the "new" button.
In the new window, fill the details of the checklist by choosing amongst the provided options.
The related questions are automatically added to your checklist below, you are free to start checking!

## Save a checklist in the database

Everytime you press the save button, the checklist is automatically sent to the database it originated from.

## 