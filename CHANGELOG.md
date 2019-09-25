# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.0.5] - 2019-09-17
### Added
- Simulate function for mouse events
- Simulate function for keyboard events
- Support for simulating events from Window or Document objects
- Unit Tests

### Deprecated
- Simulate.keyup will be removed in version 1.0. Use keyboard event simulation instead.

### Fixed
- Issue #1

## [0.0.4] - 2019-09-17
### Fixed
- export for TestUtils

## [0.0.3] - 2019-09-17
### Added
- flush promises function to TestUtils for async DOM update waiting

### Fixed
- fixed @tigerface/lwc-test-utils import not working

## [0.0.2] - 2019-09-17
### Added
- Generic event simulation
- Checkbox change simulation

### Changed
- Simulate class now must be imported directly

### Removed
- TestUtils class

## [0.0.1] - 2019-09-15
### Added
- TestUtils class
- Simulate class
