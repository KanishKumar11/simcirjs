//
// SimcirJS - library
//
// Copyright (c) 2014 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//

// includes following device types:
//  RS-FF
//  JK-FF
//  T-FF
//  D-FF
//  8bitCounter
//  HalfAdder
//  FullAdder
//  4bitAdder
//  2to4BinaryDecoder
//  3to8BinaryDecoder
//  4to16BinaryDecoder

simcir.registerDevice('RS-FF',
{
  "width":320,
  "height":160,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"NAND","id":"dev0","x":184,"y":32,"label":"NAND"},
    {"type":"NAND","id":"dev1","x":184,"y":80,"label":"NAND"},
    {"type":"In","id":"dev2","x":136,"y":24,"label":"~S"},
    {"type":"In","id":"dev3","x":136,"y":88,"label":"~R"},
    {"type":"Out","id":"dev4","x":232,"y":32,"label":"Q"},
    {"type":"Out","id":"dev5","x":232,"y":80,"label":"~Q"},
    {"type":"PushOff","id":"dev6","x":88,"y":24,"label":"PushOff"},
    {"type":"PushOff","id":"dev7","x":88,"y":88,"label":"PushOff"},
    {"type":"DC","id":"dev8","x":40,"y":56,"label":"DC"},
    {"type":"Breadboard","id":"dev9","x":376,"y":24}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev2.out0"},
    {"from":"dev0.in1","to":"dev1.out0"},
    {"from":"dev1.in0","to":"dev0.out0"},
    {"from":"dev1.in1","to":"dev3.out0"},
    {"from":"dev2.in0","to":"dev6.out0"},
    {"from":"dev3.in0","to":"dev7.out0"},
    {"from":"dev4.in0","to":"dev0.out0"},
    {"from":"dev5.in0","to":"dev1.out0"},
    {"from":"dev6.in0","to":"dev8.out0"},
    {"from":"dev7.in0","to":"dev8.out0"},
  ]
}
);

simcir.registerDevice('JK-FF',
{
  "width":480,
  "height":240,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"RS-FF","id":"dev0","x":216,"y":112,"label":"RS-FF"},
    {"type":"RS-FF","id":"dev1","x":344,"y":112,"label":"RS-FF"},
    {"type":"NAND","numInputs":3,"id":"dev2","x":168,"y":80,"label":"NAND"},
    {"type":"NAND","numInputs":3,"id":"dev3","x":168,"y":144,"label":"NAND"},
    {"type":"NAND","id":"dev4","x":296,"y":80,"label":"NAND"},
    {"type":"NAND","id":"dev5","x":296,"y":144,"label":"NAND"},
    {"type":"NOT","id":"dev6","x":168,"y":24,"label":"NOT"},
    {"type":"In","id":"dev7","x":120,"y":64,"label":"J"},
    {"type":"In","id":"dev8","x":120,"y":112,"label":"CLK"},
    {"type":"In","id":"dev9","x":120,"y":160,"label":"K"},
    {"type":"Out","id":"dev10","x":424,"y":80,"label":"Q"},
    {"type":"Out","id":"dev11","x":424,"y":144,"label":"~Q"},
    {"type":"Toggle","id":"dev12","x":72,"y":64,"label":"Toggle"},
    {"type":"PushOn","id":"dev13","x":72,"y":112,"label":"PushOn"},
    {"type":"Toggle","id":"dev14","x":72,"y":160,"label":"Toggle"},
    {"type":"DC","id":"dev15","x":24,"y":112,"label":"DC"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev2.out0"},
    {"from":"dev0.in1","to":"dev3.out0"},
    {"from":"dev1.in0","to":"dev4.out0"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev2.in0","to":"dev1.out1"},
    {"from":"dev2.in1","to":"dev7.out0"},
    {"from":"dev2.in2","to":"dev8.out0"},
    {"from":"dev3.in0","to":"dev8.out0"},
    {"from":"dev3.in1","to":"dev9.out0"},
    {"from":"dev3.in2","to":"dev1.out0"},
    {"from":"dev4.in0","to":"dev6.out0"},
    {"from":"dev4.in1","to":"dev0.out0"},
    {"from":"dev5.in0","to":"dev0.out1"},
    {"from":"dev5.in1","to":"dev6.out0"},
    {"from":"dev6.in0","to":"dev8.out0"},
    {"from":"dev7.in0","to":"dev12.out0"},
    {"from":"dev8.in0","to":"dev13.out0"},
    {"from":"dev9.in0","to":"dev14.out0"},
    {"from":"dev10.in0","to":"dev1.out0"},
    {"from":"dev11.in0","to":"dev1.out1"},
    {"from":"dev12.in0","to":"dev15.out0"},
    {"from":"dev13.in0","to":"dev15.out0"},
    {"from":"dev14.in0","to":"dev15.out0"}
  ]
}
);

simcir.registerDevice('T-FF',
{
  "width":320,
  "height":160,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"JK-FF","id":"dev0","x":168,"y":48,"label":"JK-FF"},
    {"type":"In","id":"dev1","x":120,"y":32,"label":"T"},
    {"type":"In","id":"dev2","x":120,"y":80,"label":"CLK"},
    {"type":"Out","id":"dev3","x":248,"y":32,"label":"Q"},
    {"type":"Out","id":"dev4","x":248,"y":80,"label":"~Q"},
    {"type":"Toggle","id":"dev5","x":72,"y":32,"label":"Toggle"},
    {"type":"PushOn","id":"dev6","x":72,"y":80,"label":"PushOn"},
    {"type":"DC","id":"dev7","x":24,"y":56,"label":"DC"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev1.out0"},
    {"from":"dev0.in1","to":"dev2.out0"},
    {"from":"dev0.in2","to":"dev1.out0"},
    {"from":"dev1.in0","to":"dev5.out0"},
    {"from":"dev2.in0","to":"dev6.out0"},
    {"from":"dev3.in0","to":"dev0.out0"},
    {"from":"dev4.in0","to":"dev0.out1"},
    {"from":"dev5.in0","to":"dev7.out0"},
    {"from":"dev6.in0","to":"dev7.out0"}
  ]
}
);

simcir.registerDevice('D-FF',
{
  "width":540,
  "height":200,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"In","id":"dev0","x":128,"y":24,"label":"D"},
    {"type":"In","id":"dev1","x":168,"y":128,"label":"CLK"},
    {"type":"NOT","id":"dev2","x":176,"y":64,"label":"NOT"},
    {"type":"NAND","id":"dev3","x":224,"y":32,"label":"NAND"},
    {"type":"NAND","id":"dev4","x":224,"y":96,"label":"NAND"},
    {"type":"RS-FF","id":"dev5","x":272,"y":64,"label":"RS-FF"},
    {"type":"NOT","id":"dev6","x":296,"y":128,"label":"NOT"},
    {"type":"NAND","id":"dev7","x":352,"y":32,"label":"NAND"},
    {"type":"NAND","id":"dev8","x":352,"y":96,"label":"NAND"},
    {"type":"RS-FF","id":"dev9","x":400,"y":64,"label":"RS-FF"},
    {"type":"Out","id":"dev10","x":480,"y":32,"label":"Q"},
    {"type":"Out","id":"dev11","x":480,"y":96,"label":"~Q"},
    {"type":"Toggle","id":"dev12","x":80,"y":24,"label":"Toggle"},
    {"type":"PushOn","id":"dev13","x":80,"y":128,"label":"PushOn"},
    {"type":"DC","id":"dev14","x":32,"y":72,"label":"DC"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev12.out0"},
    {"from":"dev1.in0","to":"dev13.out0"},
    {"from":"dev2.in0","to":"dev0.out0"},
    {"from":"dev3.in0","to":"dev0.out0"},
    {"from":"dev3.in1","to":"dev1.out0"},
    {"from":"dev4.in0","to":"dev1.out0"},
    {"from":"dev4.in1","to":"dev2.out0"},
    {"from":"dev5.in0","to":"dev3.out0"},
    {"from":"dev5.in1","to":"dev4.out0"},
    {"from":"dev6.in0","to":"dev1.out0"},
    {"from":"dev7.in0","to":"dev5.out0"},
    {"from":"dev7.in1","to":"dev6.out0"},
    {"from":"dev8.in0","to":"dev6.out0"},
    {"from":"dev8.in1","to":"dev5.out1"},
    {"from":"dev9.in0","to":"dev7.out0"},
    {"from":"dev9.in1","to":"dev8.out0"},
    {"from":"dev10.in0","to":"dev9.out0"},
    {"from":"dev11.in0","to":"dev9.out1"},
    {"from":"dev12.in0","to":"dev14.out0"},
    {"from":"dev13.in0","to":"dev14.out0"}
  ]
}
);

simcir.registerDevice('8bitCounter',
{
  "width":320,
  "height":420,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"T-FF","id":"dev0","x":184,"y":16,"label":"T-FF"},
    {"type":"T-FF","id":"dev1","x":184,"y":64,"label":"T-FF"},
    {"type":"T-FF","id":"dev2","x":184,"y":112,"label":"T-FF"},
    {"type":"T-FF","id":"dev3","x":184,"y":160,"label":"T-FF"},
    {"type":"T-FF","id":"dev4","x":184,"y":208,"label":"T-FF"},
    {"type":"T-FF","id":"dev5","x":184,"y":256,"label":"T-FF"},
    {"type":"T-FF","id":"dev6","x":184,"y":304,"label":"T-FF"},
    {"type":"T-FF","id":"dev7","x":184,"y":352,"label":"T-FF"},
    {"type":"Out","id":"dev8","x":264,"y":16,"label":"D0"},
    {"type":"Out","id":"dev9","x":264,"y":64,"label":"D1"},
    {"type":"Out","id":"dev10","x":264,"y":112,"label":"D2"},
    {"type":"Out","id":"dev11","x":264,"y":160,"label":"D3"},
    {"type":"Out","id":"dev12","x":264,"y":208,"label":"D4"},
    {"type":"Out","id":"dev13","x":264,"y":256,"label":"D5"},
    {"type":"Out","id":"dev14","x":264,"y":304,"label":"D6"},
    {"type":"Out","id":"dev15","x":264,"y":352,"label":"D7"},
    {"type":"In","id":"dev16","x":120,"y":16,"label":"T"},
    {"type":"In","id":"dev17","x":120,"y":112,"label":"CLK"},
    {"type":"PushOn","id":"dev18","x":72,"y":112,"label":"PushOn"},
    {"type":"DC","id":"dev19","x":24,"y":16,"label":"DC"},
    {"type":"Toggle","id":"dev20","x":72,"y":16,"label":"Toggle"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev16.out0"},
    {"from":"dev0.in1","to":"dev17.out0"},
    {"from":"dev1.in0","to":"dev16.out0"},
    {"from":"dev1.in1","to":"dev0.out0"},
    {"from":"dev2.in0","to":"dev16.out0"},
    {"from":"dev2.in1","to":"dev1.out0"},
    {"from":"dev3.in0","to":"dev16.out0"},
    {"from":"dev3.in1","to":"dev2.out0"},
    {"from":"dev4.in0","to":"dev16.out0"},
    {"from":"dev4.in1","to":"dev3.out0"},
    {"from":"dev5.in0","to":"dev16.out0"},
    {"from":"dev5.in1","to":"dev4.out0"},
    {"from":"dev6.in0","to":"dev16.out0"},
    {"from":"dev6.in1","to":"dev5.out0"},
    {"from":"dev7.in0","to":"dev16.out0"},
    {"from":"dev7.in1","to":"dev6.out0"},
    {"from":"dev8.in0","to":"dev0.out0"},
    {"from":"dev9.in0","to":"dev1.out0"},
    {"from":"dev10.in0","to":"dev2.out0"},
    {"from":"dev11.in0","to":"dev3.out0"},
    {"from":"dev12.in0","to":"dev4.out0"},
    {"from":"dev13.in0","to":"dev5.out0"},
    {"from":"dev14.in0","to":"dev6.out0"},
    {"from":"dev15.in0","to":"dev7.out0"},
    {"from":"dev16.in0","to":"dev20.out0"},
    {"from":"dev17.in0","to":"dev18.out0"},
    {"from":"dev18.in0","to":"dev19.out0"},
    {"from":"dev20.in0","to":"dev19.out0"}
  ]
}
);

simcir.registerDevice('HalfAdder',
{
  "width":320,
  "height":160,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"Toggle","id":"dev0","x":96,"y":80,"label":"Toggle"},
    {"type":"DC","id":"dev1","x":48,"y":56,"label":"DC"},
    {"type":"AND","id":"dev2","x":192,"y":80,"label":"AND"},
    {"type":"XOR","id":"dev3","x":192,"y":32,"label":"XOR"},
    {"type":"In","id":"dev4","x":144,"y":32,"label":"A"},
    {"type":"In","id":"dev5","x":144,"y":80,"label":"B"},
    {"type":"Out","id":"dev6","x":240,"y":32,"label":"S"},
    {"type":"Out","id":"dev7","x":240,"y":80,"label":"C"},
    {"type":"Toggle","id":"dev8","x":96,"y":32,"label":"Toggle"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev1.out0"},
    {"from":"dev2.in0","to":"dev4.out0"},
    {"from":"dev2.in1","to":"dev5.out0"},
    {"from":"dev3.in0","to":"dev4.out0"},
    {"from":"dev3.in1","to":"dev5.out0"},
    {"from":"dev4.in0","to":"dev8.out0"},
    {"from":"dev5.in0","to":"dev0.out0"},
    {"from":"dev6.in0","to":"dev3.out0"},
    {"from":"dev7.in0","to":"dev2.out0"},
    {"from":"dev8.in0","to":"dev1.out0"}
  ]
}
);

simcir.registerDevice('FullAdder',
{
  "width":440,
  "height":200,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"In","id":"dev0","x":120,"y":32,"label":"Cin"},
    {"type":"In","id":"dev1","x":120,"y":80,"label":"A"},
    {"type":"In","id":"dev2","x":120,"y":128,"label":"B"},
    {"type":"Toggle","id":"dev3","x":72,"y":32,"label":"Toggle"},
    {"type":"Toggle","id":"dev4","x":72,"y":80,"label":"Toggle"},
    {"type":"Toggle","id":"dev5","x":72,"y":128,"label":"Toggle"},
    {"type":"DC","id":"dev6","x":24,"y":80,"label":"DC"},
    {"type":"HalfAdder","id":"dev7","x":168,"y":104,"label":"HalfAdder"},
    {"type":"HalfAdder","id":"dev8","x":248,"y":56,"label":"HalfAdder"},
    {"type":"OR","id":"dev9","x":328,"y":104,"label":"OR"},
    {"type":"Out","id":"dev10","x":376,"y":104,"label":"Cout"},
    {"type":"Out","id":"dev11","x":376,"y":48,"label":"S"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev3.out0"},
    {"from":"dev1.in0","to":"dev4.out0"},
    {"from":"dev2.in0","to":"dev5.out0"},
    {"from":"dev3.in0","to":"dev6.out0"},
    {"from":"dev4.in0","to":"dev6.out0"},
    {"from":"dev5.in0","to":"dev6.out0"},
    {"from":"dev7.in0","to":"dev1.out0"},
    {"from":"dev7.in1","to":"dev2.out0"},
    {"from":"dev8.in0","to":"dev0.out0"},
    {"from":"dev8.in1","to":"dev7.out0"},
    {"from":"dev9.in0","to":"dev8.out1"},
    {"from":"dev9.in1","to":"dev7.out1"},
    {"from":"dev10.in0","to":"dev9.out0"},
    {"from":"dev11.in0","to":"dev8.out0"}
  ]
}
);

simcir.registerDevice('4bitAdder',
{
  "width":280,
  "height":480,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"FullAdder","id":"dev0","x":120,"y":72,"label":"FullAdder"},
    {"type":"FullAdder","id":"dev1","x":120,"y":136,"label":"FullAdder"},
    {"type":"FullAdder","id":"dev2","x":120,"y":200,"label":"FullAdder"},
    {"type":"FullAdder","id":"dev3","x":120,"y":264,"label":"FullAdder"},
    {"type":"In","id":"dev4","x":40,"y":80,"label":"A0"},
    {"type":"In","id":"dev5","x":40,"y":128,"label":"A1"},
    {"type":"In","id":"dev6","x":40,"y":176,"label":"A2"},
    {"type":"In","id":"dev7","x":40,"y":224,"label":"A3"},
    {"type":"In","id":"dev8","x":40,"y":272,"label":"B0"},
    {"type":"In","id":"dev9","x":40,"y":320,"label":"B1"},
    {"type":"In","id":"dev10","x":40,"y":368,"label":"B2"},
    {"type":"In","id":"dev11","x":40,"y":416,"label":"B3"},
    {"type":"Out","id":"dev12","x":200,"y":72,"label":"S0"},
    {"type":"Out","id":"dev13","x":200,"y":120,"label":"S1"},
    {"type":"Out","id":"dev14","x":200,"y":168,"label":"S2"},
    {"type":"Out","id":"dev15","x":200,"y":216,"label":"S3"},
    {"type":"Out","id":"dev16","x":200,"y":280,"label":"Cout"},
    {"type":"In","id":"dev17","x":40,"y":24,"label":"Cin"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev17.out0"},
    {"from":"dev0.in1","to":"dev4.out0"},
    {"from":"dev0.in2","to":"dev8.out0"},
    {"from":"dev1.in0","to":"dev0.out1"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev1.in2","to":"dev9.out0"},
    {"from":"dev2.in0","to":"dev1.out1"},
    {"from":"dev2.in1","to":"dev6.out0"},
    {"from":"dev2.in2","to":"dev10.out0"},
    {"from":"dev3.in0","to":"dev2.out1"},
    {"from":"dev3.in1","to":"dev7.out0"},
    {"from":"dev3.in2","to":"dev11.out0"},
    {"from":"dev12.in0","to":"dev0.out0"},
    {"from":"dev13.in0","to":"dev1.out0"},
    {"from":"dev14.in0","to":"dev2.out0"},
    {"from":"dev15.in0","to":"dev3.out0"},
    {"from":"dev16.in0","to":"dev3.out1"}
  ]
}
);

simcir.registerDevice('2to4BinaryDecoder',
{
  "width":400,
  "height":240,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"AND","numInputs":3,"id":"dev0","x":280,"y":24,"label":"AND"},
    {"type":"AND","numInputs":3,"id":"dev1","x":280,"y":72,"label":"AND"},
    {"type":"AND","numInputs":3,"id":"dev2","x":280,"y":120,"label":"AND"},
    {"type":"NOT","id":"dev3","x":192,"y":48,"label":"NOT"},
    {"type":"AND","numInputs":3,"id":"dev4","x":280,"y":168,"label":"AND"},
    {"type":"NOT","id":"dev5","x":192,"y":96,"label":"NOT"},
    {"type":"In","id":"dev6","x":192,"y":176,"label":"OE"},
    {"type":"In","id":"dev7","x":128,"y":48,"label":"D0"},
    {"type":"In","id":"dev8","x":128,"y":96,"label":"D1"},
    {"type":"Toggle","id":"dev9","x":80,"y":48,"label":"Toggle"},
    {"type":"Toggle","id":"dev10","x":80,"y":96,"label":"Toggle"},
    {"type":"DC","id":"dev11","x":32,"y":96,"label":"DC"},
    {"type":"Out","id":"dev12","x":328,"y":24,"label":"A0"},
    {"type":"Out","id":"dev13","x":328,"y":72,"label":"A1"},
    {"type":"Out","id":"dev14","x":328,"y":120,"label":"A2"},
    {"type":"Out","id":"dev15","x":328,"y":168,"label":"A3"},
    {"type":"Toggle","id":"dev16","x":80,"y":144,"label":"Toggle"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev3.out0"},
    {"from":"dev0.in1","to":"dev5.out0"},
    {"from":"dev0.in2","to":"dev6.out0"},
    {"from":"dev1.in0","to":"dev7.out0"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev1.in2","to":"dev6.out0"},
    {"from":"dev2.in0","to":"dev3.out0"},
    {"from":"dev2.in1","to":"dev8.out0"},
    {"from":"dev2.in2","to":"dev6.out0"},
    {"from":"dev3.in0","to":"dev7.out0"},
    {"from":"dev4.in0","to":"dev7.out0"},
    {"from":"dev4.in1","to":"dev8.out0"},
    {"from":"dev4.in2","to":"dev6.out0"},
    {"from":"dev5.in0","to":"dev8.out0"},
    {"from":"dev6.in0","to":"dev16.out0"},
    {"from":"dev7.in0","to":"dev9.out0"},
    {"from":"dev8.in0","to":"dev10.out0"},
    {"from":"dev9.in0","to":"dev11.out0"},
    {"from":"dev10.in0","to":"dev11.out0"},
    {"from":"dev12.in0","to":"dev0.out0"},
    {"from":"dev13.in0","to":"dev1.out0"},
    {"from":"dev14.in0","to":"dev2.out0"},
    {"from":"dev15.in0","to":"dev4.out0"},
    {"from":"dev16.in0","to":"dev11.out0"}
  ]
}
);

simcir.registerDevice('3to8BinaryDecoder',
{
  "width":360,
  "height":440,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"In","id":"dev0","x":24,"y":144,"label":"D0"},
    {"type":"In","id":"dev1","x":24,"y":192,"label":"D1"},
    {"type":"In","id":"dev2","x":24,"y":240,"label":"D2"},
    {"type":"In","id":"dev3","x":24,"y":304,"label":"OE"},
    {"type":"NOT","id":"dev4","x":72,"y":240,"label":"NOT"},
    {"type":"AND","id":"dev5","x":120,"y":248,"label":"AND"},
    {"type":"AND","id":"dev6","x":120,"y":296,"label":"AND"},
    {"type":"2to4BinaryDecoder","id":"dev7","x":184,"y":144,"label":"2to4BinaryDecoder"},
    {"type":"2to4BinaryDecoder","id":"dev8","x":184,"y":224,"label":"2to4BinaryDecoder"},
    {"type":"Out","id":"dev9","x":296,"y":32,"label":"A0"},
    {"type":"Out","id":"dev10","x":296,"y":80,"label":"A1"},
    {"type":"Out","id":"dev11","x":296,"y":128,"label":"A2"},
    {"type":"Out","id":"dev12","x":296,"y":176,"label":"A3"},
    {"type":"Out","id":"dev13","x":296,"y":224,"label":"A4"},
    {"type":"Out","id":"dev14","x":296,"y":272,"label":"A5"},
    {"type":"Out","id":"dev15","x":296,"y":320,"label":"A6"},
    {"type":"Out","id":"dev16","x":296,"y":368,"label":"A7"}
  ],
  "connectors":[
    {"from":"dev4.in0","to":"dev2.out0"},
    {"from":"dev5.in0","to":"dev4.out0"},
    {"from":"dev5.in1","to":"dev3.out0"},
    {"from":"dev6.in0","to":"dev2.out0"},
    {"from":"dev6.in1","to":"dev3.out0"},
    {"from":"dev7.in0","to":"dev0.out0"},
    {"from":"dev7.in1","to":"dev1.out0"},
    {"from":"dev7.in2","to":"dev5.out0"},
    {"from":"dev8.in0","to":"dev0.out0"},
    {"from":"dev8.in1","to":"dev1.out0"},
    {"from":"dev8.in2","to":"dev6.out0"},
    {"from":"dev9.in0","to":"dev7.out0"},
    {"from":"dev10.in0","to":"dev7.out1"},
    {"from":"dev11.in0","to":"dev7.out2"},
    {"from":"dev12.in0","to":"dev7.out3"},
    {"from":"dev13.in0","to":"dev8.out0"},
    {"from":"dev14.in0","to":"dev8.out1"},
    {"from":"dev15.in0","to":"dev8.out2"},
    {"from":"dev16.in0","to":"dev8.out3"}
  ]
}
);

simcir.registerDevice('4to16BinaryDecoder',
{
  "width":440,
  "height":360,
  "showToolbox":false,
  "toolbox":[
  ],
  "devices":[
    {"type":"In","id":"dev0","x":32,"y":56,"label":"D0"},
    {"type":"In","id":"dev1","x":32,"y":104,"label":"D1"},
    {"type":"In","id":"dev2","x":32,"y":152,"label":"D2"},
    {"type":"In","id":"dev3","x":32,"y":200,"label":"D3"},
    {"type":"In","id":"dev4","x":32,"y":264,"label":"OE"},
    {"type":"NOT","id":"dev5","x":80,"y":200,"label":"NOT"},
    {"type":"AND","id":"dev6","x":136,"y":208,"label":"AND"},
    {"type":"AND","id":"dev7","x":136,"y":256,"label":"AND"},
    {"type":"3to8BinaryDecoder","id":"dev8","x":208,"y":32,"label":"3to8BinaryDecoder"},
    {"type":"3to8BinaryDecoder","id":"dev9","x":208,"y":184,"label":"3to8BinaryDecoder"},
    {"type":"BusOut","id":"dev10","x":320,"y":88,"label":"BusOut"},
    {"type":"BusOut","id":"dev11","x":320,"y":184,"label":"BusOut"},
    {"type":"Out","id":"dev12","x":376,"y":128,"label":"A0"},
    {"type":"Out","id":"dev13","x":376,"y":184,"label":"A1"}
  ],
  "connectors":[
    {"from":"dev5.in0","to":"dev3.out0"},
    {"from":"dev6.in0","to":"dev5.out0"},
    {"from":"dev6.in1","to":"dev4.out0"},
    {"from":"dev7.in0","to":"dev3.out0"},
    {"from":"dev7.in1","to":"dev4.out0"},
    {"from":"dev8.in0","to":"dev0.out0"},
    {"from":"dev8.in1","to":"dev1.out0"},
    {"from":"dev8.in2","to":"dev2.out0"},
    {"from":"dev8.in3","to":"dev6.out0"},
    {"from":"dev9.in0","to":"dev0.out0"},
    {"from":"dev9.in1","to":"dev1.out0"},
    {"from":"dev9.in2","to":"dev2.out0"},
    {"from":"dev9.in3","to":"dev7.out0"},
    {"from":"dev10.in0","to":"dev8.out0"},
    {"from":"dev10.in1","to":"dev8.out1"},
    {"from":"dev10.in2","to":"dev8.out2"},
    {"from":"dev10.in3","to":"dev8.out3"},
    {"from":"dev10.in4","to":"dev8.out4"},
    {"from":"dev10.in5","to":"dev8.out5"},
    {"from":"dev10.in6","to":"dev8.out6"},
    {"from":"dev10.in7","to":"dev8.out7"},
    {"from":"dev11.in0","to":"dev9.out0"},
    {"from":"dev11.in1","to":"dev9.out1"},
    {"from":"dev11.in2","to":"dev9.out2"},
    {"from":"dev11.in3","to":"dev9.out3"},
    {"from":"dev11.in4","to":"dev9.out4"},
    {"from":"dev11.in5","to":"dev9.out5"},
    {"from":"dev11.in6","to":"dev9.out6"},
    {"from":"dev11.in7","to":"dev9.out7"},
    {"from":"dev12.in0","to":"dev10.out0"},
    {"from":"dev13.in0","to":"dev11.out0"}
  ]
}
);
simcir.registerDevice('Breadboard', {
  "width": 400,
  "height": 300,
  "showToolbox": false,
  "toolbox": [],
  "devices": [],
  "connectors": [
    
],
  "custom": {
    "pins": [
      {"name": "A1", "x": 20, "y": 20, "connectors": [{"x": 20, "y": 30}, {"x": 30, "y": 20}]},
      {"name": "A2", "x": 40, "y": 20, "connectors": [{"x": 40, "y": 30}, {"x": 50, "y": 20}]},
      {"name": "A3", "x": 60, "y": 20, "connectors": [{"x": 60, "y": 30}, {"x": 70, "y": 20}]},
      {"name": "A4", "x": 80, "y": 20, "connectors": [{"x": 80, "y": 30}, {"x": 90, "y": 20}]},
      {"name": "A5", "x": 100, "y": 20, "connectors": [{"x": 100, "y": 30}, {"x": 110, "y": 20}]},
      {"name": "A6", "x": 120, "y": 20, "connectors": [{"x": 120, "y": 30}, {"x": 130, "y": 20}]},
      {"name": "A7", "x": 140, "y": 20, "connectors": [{"x": 140, "y": 30}, {"x": 150, "y": 20}]},
      {"name": "A8", "x": 160, "y": 20, "connectors": [{"x": 160, "y": 30}, {"x": 170, "y": 20}]},
      {"name": "A9", "x": 180, "y": 20},
      {"name": "A10", "x": 200, "y": 20},
      {"name": "A11", "x": 220, "y": 20},
      {"name": "A12", "x": 240, "y": 20},
      {"name": "A13", "x": 260, "y": 20},
      {"name": "A14", "x": 280, "y": 20},
      {"name": "A15", "x": 300, "y": 20},
      {"name": "A16", "x": 320, "y": 20},
      {"name": "A17", "x": 340, "y": 20},
      {"name": "A18", "x": 360, "y": 20},
      {"name": "A19", "x": 380, "y": 20},
      {"name": "A20", "x": 400, "y": 20},
      {"name": "B1", "x": 20, "y": 280},
      {"name": "B2", "x": 40, "y": 280},
      {"name": "B3", "x": 60, "y": 280},
      {"name": "B4", "x": 80, "y": 280},
      {"name": "B5", "x": 100, "y": 280},
      {"name": "B6", "x": 120, "y": 280},
      {"name": "B7", "x": 140, "y": 280},
      {"name": "B8", "x": 160, "y": 280},
      {"name": "B9", "x": 180, "y": 280},
      {"name": "B10", "x": 200, "y": 280},
      {"name": "B11", "x": 220, "y": 280},
      {"name": "B12", "x": 240, "y": 280},
      {"name": "B13", "x": 260, "y": 280},
      {"name": "B14", "x": 280, "y": 280},
      {"name": "B15", "x": 300, "y": 280},
      {"name": "B16", "x": 320, "y": 280},
      {"name": "B17", "x": 340, "y": 280},
      {"name": "B18", "x": 360, "y": 280},
      {"name": "B19", "x": 380, "y": 280},
      {"name": "B20", "x": 400, "y": 280},
      {"name": "C1", "x": 20, "y": 60},
      {"name": "C2", "x": 40, "y": 60},
      {"name": "C3", "x": 60, "y": 60},
      {"name": "C4", "x": 80, "y": 60},
      {"name": "C5", "x": 100, "y": 60},
      {"name": "C6", "x": 120, "y": 60},
      {"name": "C7", "x": 140, "y": 60},
      {"name": "C8", "x": 160, "y": 60},
      {"name": "C9", "x": 180, "y": 60},
      {"name": "C10", "x": 200, "y": 60},
      {"name": "C11", "x": 220, "y": 60},
      {"name": "C12", "x": 240, "y": 60},
      {"name": "C13", "x": 260, "y": 60},
      {"name": "C14", "x": 280, "y": 60},
      {"name": "C15", "x": 300, "y": 60},
      {"name": "C16", "x": 320, "y": 60},
      {"name": "C17", "x": 340, "y": 60},
      {"name": "C18", "x": 360, "y": 60},
      {"name": "C19", "x": 380, "y": 60},
      {"name": "C20", "x": 400, "y": 60},
      {"name": "D1", "x": 20, "y": 100},
      {"name": "D2", "x": 40, "y": 100},
      {"name": "D3", "x": 60, "y": 100},
      {"name": "D4", "x": 80, "y": 100},
      {"name": "D5", "x": 100, "y": 100},
      {"name": "D6", "x": 120, "y": 100},
      {"name": "D7", "x": 140, "y": 100},
      {"name": "D8", "x": 160, "y": 100},
      {"name": "D9", "x": 180, "y": 100},
      {"name": "D10", "x": 200, "y": 100},
      {"name": "D11", "x": 220, "y": 100},
      {"name": "D12", "x": 240, "y": 100},
      {"name": "D13", "x": 260, "y": 100},
      {"name": "D14", "x": 280, "y": 100},
      {"name": "D15", "x": 300, "y": 100},
      {"name": "D16", "x": 320, "y": 100},
      {"name": "D17", "x": 340, "y": 100},
      {"name": "D18", "x": 360, "y": 100},
      {"name": "D19", "x": 380, "y": 100},
      {"name": "D20", "x": 400, "y": 100},
      {"name": "E1", "x": 20, "y": 140},
      {"name": "E2", "x": 40, "y": 140},
      {"name": "E3", "x": 60, "y": 140},
      {"name": "E4", "x": 80, "y": 140},
      {"name": "E5", "x": 100, "y": 140},
      {"name": "E6", "x": 120, "y": 140},
      {"name": "E7", "x": 140, "y": 140},
      {"name": "E8", "x": 160, "y": 140},
      {"name": "E9", "x": 180, "y": 140},
      {"name": "E10", "x": 200, "y": 140},
      {"name": "E11", "x": 220, "y": 140},
      {"name": "E12", "x": 240, "y": 140},
      {"name": "E13", "x": 260, "y":140},
      {"name": "E14", "x": 280, "y":140},
      {"name": "E15", "x": 300, "y":140},
      {"name": "E16", "x": 320, "y":140},
      {"name": "E17", "x": 340, "y":140},
      {"name": "E18", "x": 360, "y": 140},
      {"name": "E19", "x": 380, "y": 140},
      {"name": "E20", "x": 400, "y": 140},
      {"name": "F1", "x": 20, "y": 180},
      {"name": "F2", "x": 40, "y": 180},
      {"name": "F3", "x": 60, "y": 180},
      {"name": "F4", "x": 80, "y": 180},
      {"name": "F5", "x": 100, "y": 180},
      {"name": "F6", "x": 120, "y": 180},
      {"name": "F7", "x": 140, "y": 180},
      {"name": "F8", "x": 160, "y": 180},
      {"name": "F9", "x": 180, "y": 180},
      {"name": "F10", "x": 200, "y": 180},
      {"name": "F11", "x": 220, "y": 180},
      {"name": "F12", "x": 240, "y": 180},
      {"name": "F13", "x": 260, "y": 180},
      {"name": "F14", "x": 280, "y": 180},
      {"name": "F15", "x": 300, "y": 180},
      {"name": "F16", "x": 320, "y": 180},
      {"name": "F17", "x": 340, "y": 180},
      {"name": "F18", "x": 360, "y": 180},
      {"name": "F19", "x": 380, "y": 180},
      {"name": "F20", "x": 400, "y": 180},
      {"name": "G1", "x": 20, "y": 220},
      {"name": "G2", "x": 40, "y": 220},
      {"name": "G3", "x": 60, "y": 220},
      {"name": "G4", "x": 80, "y": 220},
      {"name": "G5", "x": 100, "y": 220},
      {"name": "G6", "x": 120, "y": 220},
      {"name": "G7", "x": 140, "y": 220},
      {"name": "G8", "x": 160, "y": 220},
      {"name": "G9", "x": 180, "y": 220},
      {"name": "G10", "x": 200, "y": 220},
      {"name": "G11", "x": 220, "y": 220},
      {"name": "G12", "x": 240, "y": 220},
      {"name": "G13", "x": 260, "y": 220},
      {"name": "G14", "x": 280, "y": 220},
      {"name": "G15", "x": 300, "y": 220},
      {"name": "G16", "x": 320, "y": 220},
      {"name": "G17", "x": 340, "y": 220},
      {"name": "G18", "x": 360, "y": 220},
      {"name": "G19", "x": 380, "y": 220},
      {"name": "G20", "x": 400, "y": 220},
      {"name": "H1", "x": 20, "y": 260},
      {"name": "H2", "x": 40, "y": 260},
      {"name": "H3", "x": 60, "y": 260},
      {"name": "H4", "x": 80, "y": 260},
      {"name": "H5", "x": 100, "y": 260},
      {"name": "H6", "x": 120, "y": 260},
      {"name": "H7", "x": 140, "y": 260},
      {"name": "H8", "x": 160, "y": 260},
      {"name": "H9", "x": 180, "y": 260},
      {"name": "H10", "x": 200, "y": 260},
      {"name": "H11", "x": 220, "y": 260},
      {"name": "H12", "x": 240, "y": 260},
      {"name": "H13", "x": 260, "y": 260},
      {"name": "H14", "x": 280, "y": 260},
      {"name": "H15", "x": 300, "y": 260},
      {"name": "H16", "x": 320, "y": 260},
      {"name": "H17", "x": 340, "y": 260},
      {"name": "H18", "x": 360, "y": 260},
      {"name": "H19", "x": 380, "y": 260},
      {"name": "H20", "x": 400, "y": 260}
    ]
  }
}
);