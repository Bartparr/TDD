'use strict';
var expect = require('chai').expect;

describe('FlickrFetcher',function(){

it('doit exister',function(){

  var FlickrFetcher = require('./flickr-fetcher.js');
  expect(FlickrFetcher).to.not.be.undefined; //tout sauf undefined
})

})
