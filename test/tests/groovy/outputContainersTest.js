/*
 *  Copyright 2018 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var BeakerXPageObject = require('../beakerx.po.js');
var PlotHelperObject = require('../plot.helper');
var beakerxPO;
var plotHelper;

describe('(Groovy) Output Containers Test', function(){
  beforeAll(function() {
    beakerxPO = new BeakerXPageObject();
    plotHelper = new PlotHelperObject();
    beakerxPO.runNotebookByUrl('/notebooks/test/notebooks/groovy/OutputContainersTest.ipynb');
  });

  afterAll(function() {
    beakerxPO.closeAndHaltNotebook();
  });

  var cellIndex;

  describe('(Groovy) Hidden Output Containers', function() {
    it('Cell does not display hidden output', function () {
      cellIndex = 0;

      codeCell = beakerxPO.runCodeCellByIndex(cellIndex);
      expect(codeCell.$('div.output').childNodes).toBe(undefined);
    });
  });

  describe('(Groovy) Stacked Output Containers', function () {
    it('Cell displays stacked output', function () {
      cellIndex += 1;

      var testValues = {
        stackedOutputString: 'pizza!',
        stackedOutputArray: '[19, 42, hamburger, 92]',
        stackedOutputHTML: 'HTML masterclass',
        stackedOutputNull: 'null'
      };
      var codeCell = beakerxPO.runCodeCellByIndex(cellIndex);

      expect(codeCell.$('div.output').isEnabled()).toBeTruthy();
      expect(codeCell.$$('div.widget-html-pre')[0].getText()).toBe(testValues.stackedOutputString);
      expect(codeCell.$$('div.widget-html-pre')[1].getText()).toBe(testValues.stackedOutputArray);
      expect(codeCell.$('div.widget-html-content>h3').getText()).toBe(testValues.stackedOutputHTML);
      expect(codeCell.$$('div.widget-html-pre')[2].getText()).toBe(testValues.stackedOutputNull);
    });
  });

  describe('(Groovy) ')
});