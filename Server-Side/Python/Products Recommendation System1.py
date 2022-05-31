#!/usr/bin/env python
# coding: utf-8

from operator import index
from flask import Flask
import pyodbc
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

cnxn_str = ("Driver={SQL Server};"
            "Server=DESKTOP-FI93AKQ\SQLEXPRESS;"
            "Database=YuriShopDB;"
            "UID=YuriShop;"
            "PWD=YuriShop;")
cnxn = pyodbc.connect(cnxn_str)


def getSuggestions(productID):
    sql = cnxn.cursor()
    data = pd.read_sql(
        "SELECT TOP(1000) [ProductId],LOWER([Name]) AS Name,LOWER([Category]) AS Category, LOWER([Color]) AS Color, LOWER([Size]) AS Size FROM Product", cnxn)
    data

    def combine_features(data):
        features = []
        for i in range(0, data.shape[0]):
            features.append(data["Name"][i] + " " + data["Category"]
                            [i] + " " + data["Color"][i] + " " + data["Size"][i])
        return features

    data["combine_features"] = combine_features(data)
    data

    # Convert Table Into Matrix
    cm = CountVectorizer().fit_transform(data["combine_features"])

    # Convert Matrix into Cosine Similarities
    cs = cosine_similarity(cm)

    # Name of product the user likes In wishlist
    print(type(productID))
    ref = data[data["ProductId"] == int(productID)]["Name"]
    reff = list(ref)[0]

    # Get ProductId of wishlist
    Productid = data[data.Name == reff]["ProductId"].values[0]

    # Create tuple (ProductID, Similarity)
    scores = list(enumerate(cs[ref.index[0]]))

    # Sort scores
    sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)
    sorted_scores = sorted_scores[1:]

    # print 3 close scores
    j = 0
    listt = {}
    print("The 3 most recommended Products for " + reff + " are:\n")
    for item in sorted_scores:
        Product_Name = data[data.index == item[0]]["Name"].values[0]
        Product_id = data[data.index == item[0]]["ProductId"].values[0]
        print(j+1, Product_Name)
        listt[str(Product_id)] = (Product_Name)
        j = j+1
        if j >= 3:
            j = 0
            break
    return listt


app = Flask(__name__)


@app.route('/<productID>')
def get(productID):
    return getSuggestions(productID)


if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=8000)
