const path = require('path');
const fs = require('fs');
const Excel = require('exceljs');
let Sendnet = require('./sendnet');

const COLUMN_NAME = {
    'region': 0,
    'title': 1,
    'image_url': 2,
    'grand_prize' : 3,
    'additional_prizes': 4,
    'entry_date': 5,
    'giveaway_url': 6
};

let sendnet = new Sendnet(COLUMN_NAME);