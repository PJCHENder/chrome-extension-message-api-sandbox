// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

console.log('Here is background');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Get response in background, the request is from: ', request.from);

  setTimeout(() => chrome.runtime.sendMessage({ from: 'background.js' }), 1500);
});
