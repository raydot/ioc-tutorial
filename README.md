#Inversion of Control

Following Inversion of Control [tutorial](https://dev.to/azure/dependency-injection-in-javascript-101-2b1e) by Jeremy Likness. 

## The issue:
In the first example, the code works but is very simple.  The problems come into play in a much larger application.  Imagine having hundreds of components with dependencies...

Issues: 

<ol>
    <li>The components depend directly on each other.  If you attempt to break each component (wheel, piston, etc) into its own file, you will have to ensure everything is included in the right order.  You can't define or create the engine before the piston, for example.</li>
    <li>Components can't be developed in parallel.  The tight coupling means it's not possible to have one developer working on pistons while another works on engines.  Not even with empty placeholders.</li>
    <li>The components create their own dependencies so there is no way to test without these dependencies.  You can't easily swap out "piston" for "test piston."  This is no good for unit testing!</li>
</ol>

A little refactoring will solve the third problem.  Right now the components are in charge of their own dependencies.  We will inver that, so the components are no longer in control.  We'll create the dependencies elsewhere and inject them.  Inversion of control removes the direct dependencies, and dependency injection is how instances are passed to components.

## Further adventures
In the second example, the Inversion of Control pattern has been applied, and we are doing some simple dependency injection.  However, the previous issues #1 and #2 have not been addressed.  The objects must still be created in the right order.  It's still difficult to develop in parallel or out of sequence.

<em>What do <strong>do?</strong></em>

The solution is to bring in an IoC container to manage Dependency Injection.  There are many kinds, and they all typically work like this:

<ul>
    <li>You get one global instance (!) of the container.  (There can be multiples, but sticking to one for now!)</li>
    <li>Components are registered with the container.</li>
    <li>Components are requested from the container, which handles the dependencies.</li>
</ul>

This requires involving the author's [jsInject library](https://github.com/JeremyLikness/jsInject) which is based on the way Angular handles dependency injection.  The author has also written a [blog post](https://csharperimage.jeremylikness.com/2014/06/dependency-injection-explained-via.html) on dependency injection in JavaScript.

