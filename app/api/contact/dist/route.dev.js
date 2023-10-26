"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = POST;

var _server = require("next/server");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function POST(req) {
  var _ref, name, email, message, data, user, transporter, mailOptions;

  return regeneratorRuntime.async(function POST$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          _ref = _context.sent;
          name = _ref.name;
          email = _ref.email;
          message = _ref.message;
          data = {
            name: name,
            email: email,
            message: message
          };
          user = process.env.User;
          transporter = _nodemailer["default"].createTransport({
            service: "gmail",
            secure: true,
            auth: {
              user: user,
              pass: process.env.Password
            }
          });
          mailOptions = {
            from: user,
            to: "alaa.ahmed20022002@gmail.com",
            replyTo: email,
            subject: "Contact from Submission From ".concat(name),
            html: "\n    <p>Name:".concat(name, "</p>\n    <p>Email:").concat(email, "</p>\n    <p>Message:").concat(message, "</p>\n    ")
          };

          if (!data) {
            _context.next = 20;
            break;
          }

          _context.prev = 11;
          _context.next = 14;
          return regeneratorRuntime.awrap(transporter.sendMail(mailOptions));

        case 14:
          return _context.abrupt("return", _server.NextResponse.json({
            message: "Message has been sent !",
            status: 200
          }));

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](11);
          return _context.abrupt("return", _server.NextResponse.json({
            message: "Message hasn't been sent.Try again !",
            status: 500
          }));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[11, 17]]);
}